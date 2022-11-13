import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import axios from 'axios'
import useGetDefaultDID from '../../DID/hooks/useGetDefaultDID'
import useCreateDidBasedJwt from './useCreateDidBasedJwt'
import { AssistDIDAdapter } from '../../DID/AssistDIDAdapter.ts'
import useGetCivicAuthHeader from '../../../civic/hooks/useGetCivicAuthHeader.ts'

export default () => {
  const { getToken } = useAuth()
  const currentUser = useSelector((s) => s.session.currentUser)

  const createDIDBasedJWT = useCreateDidBasedJwt()
  const getDefaultDID = useGetDefaultDID()
  const getCivicAuthHeader = useGetCivicAuthHeader()
  // const { user } = useUser({ withAssertions: true })
  useEffect(() => {
    // Set all request headers with token
    axios.interceptors.request.use(
      async (req) => {
        req.headers['Access-Control-Max-Age'] = 6000
        if (req.url.includes('eid')) return req
        if (req.url.includes(AssistDIDAdapter.TESTNET_RPC_ENDPOINT)) {
          req.headers.Authorization = AssistDIDAdapter.API_KEY
          return req
        }
        const civicToken = await getCivicAuthHeader()
        const defaultDID = await getDefaultDID()
        let token = null
        token = await getToken({ template: 'jwt' })

        if (token) {
          req.headers['X-JWT-TYPE'] = 'CLERK'
          req.headers.Authorization = `Bearer ${token}`
        } else if (defaultDID && currentUser) {
          const docExistsButNotValid = currentUser?.doc && !currentUser.doc.isValid()
          let didDoc = currentUser.doc
          if (docExistsButNotValid) {
            didDoc = await defaultDID.resolve()
          }
          const didToken = await createDIDBasedJWT(didDoc)
          token = didToken
          req.headers['X-JWT-TYPE'] = `ELASTOS-DID ${didDoc.subject.repr}`
          req.headers.Authorization = `Bearer ${token}`
        } else {
          req.headers['X-JWT-TYPE'] = 'CIVIC-DID'
          req.headers.Authorization = `Bearer ${civicToken}`
        }
        // if (!token) {
        //   console.log(req)
        //   console.log("cancelling...")
        //   throw new axios.Cancel('Operation canceled by the user.')
        // }
        return req
      },
      (error) => Promise.reject(error),
    )

    // If request fails and response gives 401 error, set header with new token in case it's expired
    // axios.interceptors.response.use(
    //   (res) => res,
    //   async (error) => {
    //     const { config } = error
    //     const defaultDID = await getDefaultDID()
    //     console.log(error)
    //     if (error.response && error.response.status === 401) {
    //       try {
    //         let token = null
    //         if (user) {
    //           token = await getToken()
    //         } else if (defaultDID) {
    //           console.log('***************RESPONSE**************')
    //           const doc = await defaultDID.resolve()
    //           const didToken = await createDIDBasedJWT(doc)
    //           token = didToken
    //         }
    //         config.headers.Authorization = `Bearer ${token}`
    //         return axios(config)
    //       } catch {
    //         return Promise.reject(error)
    //       }
    //     }
    //     return Promise.reject(error)
    //   },
    // )
  }, [currentUser, createDIDBasedJWT, getDefaultDID, getCivicAuthHeader])
}
