import { RequestOptions } from '@octokit/types/dist-types/RequestOptions';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useSelector } from 'react-redux';
import useGetCivicAuthHeader from '../../civic/hooks/useGetCivicAuthHeader';
import useCreateDidBasedJwt from '../../pages/hooks/auth/useCreateDidBasedJwt'

import useGetDefaultDid from '../../pages/DID/hooks/useGetDefaultDID.js'
import { AssistDIDAdapter } from '../../pages/DID/AssistDIDAdapter';
import { sessionApi } from '../services/session';
import { BACKEND_DEV, NOTIFICATIONS_SERVICE } from '../endpoints/endpoints'
import { MemoryStoredToken } from '../../civic/utils/generateCivicAuthHeader';

const baseAxiosInstance = axios.create();

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: BACKEND_DEV }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params'],
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await baseAxiosInstance({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const backendBaseQuery = axiosBaseQuery();

export const notificationsBaseQuery = axiosBaseQuery({baseUrl: NOTIFICATIONS_SERVICE})

export default () => {
  
  const { getToken } = useAuth()
  const currentUser = useSelector((s) => s[sessionApi.reducerPath].currentUser)
  const { user: clerkUser } = useUser()
  const createDIDBasedJWT = useCreateDidBasedJwt()
  const getDefaultDID = useGetDefaultDid()
  const getCivicAuthHeader = useGetCivicAuthHeader()
  useEffect(() => {
    baseAxiosInstance.interceptors.request.use(
      async (req) => {
        console.log("INTERCEPTING!!!!", req.url)
        req.headers['Access-Control-Max-Age'] = 6000
        if (req.url.includes('eid') || req.url.includes('enums')) return req
        if (req.url.includes(AssistDIDAdapter.TESTNET_RPC_ENDPOINT)) {
          req.headers.Authorization = AssistDIDAdapter.API_KEY
          return req
        }
        const civicToken = await getCivicAuthHeader()
        // const civicToken = MemoryStoredToken.getInstance().token
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
        return req
      },
      (error) => Promise.reject(error),
    )
    

  }, [currentUser, clerkUser, createDIDBasedJWT, getDefaultDID, getCivicAuthHeader])
}

