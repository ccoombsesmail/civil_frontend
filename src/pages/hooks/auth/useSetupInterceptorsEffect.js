import { useAuth, useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import axios from 'axios'
import useGetDefaultDID from '../../DID/hooks/useGetDefaultDID'
import useCreateDidBasedJwt from './useCreateDidBasedJwt'
import { AssistDIDAdapter } from '../../DID/AssistDIDAdapter.ts'

export default () => {
  const { getToken } = useAuth()
  const currentUser = useSelector((s) => s.session.currentUser)

  const createDIDBasedJWT = useCreateDidBasedJwt()
  const getDefaultDID = useGetDefaultDID()
  const { user } = useUser({ withAssertions: true })
  useEffect(() => {
    // Set all request headers with token
    axios.interceptors.request.use(
      async (req) => {
        console.log(req.url)
        if (req.url.includes('eid')) return req
        if (req.url.includes(AssistDIDAdapter.MAINNET_RPC_ENDPOINT)) {
          req.headers.Authorization = AssistDIDAdapter.API_KEY
          return req
        }
        const defaultDID = await getDefaultDID()
        let token = null
        token = await getToken({ template: 'jwt' })

        if (token) {
          req.headers['X-JWT-TYPE'] = 'CLERK'
          req.headers.Authorization = `Bearer ${token}`
        } else if (defaultDID && currentUser) {
          const docExistsButNotValid = currentUser?.doc && !currentUser.doc.isValid()
          let didDoc = currentUser?.doc
          if (docExistsButNotValid) {
            didDoc = await defaultDID.resolve()
          }
          const didToken = await createDIDBasedJWT(didDoc)
          token = didToken
          req.headers['X-JWT-TYPE'] = `DID ${didDoc.subject.repr}`
          req.headers.Authorization = `Bearer ${token}`
        }
        return req
      },
      (error) => Promise.reject(error),
    )

    // If request fails and response gives 401 error, set header with new token in case it's expired
    axios.interceptors.response.use(
      (res) => res,
      async (error) => {
        const { config } = error
        const defaultDID = await getDefaultDID()

        if (error.response && error.response.status === 401) {
          try {
            let token = null
            if (user) {
              token = await getToken()
            } else if (defaultDID) {
              console.log('***************RESPONSE**************')
              const doc = await defaultDID.resolve()
              const didToken = await createDIDBasedJWT(doc)
              token = didToken
            }
            config.headers.Authorization = `Bearer ${token}`
            return axios(config)
          } catch {
            return Promise.reject(error)
          }
        }
        return Promise.reject(error)
      },
    )
  }, [currentUser])
}
