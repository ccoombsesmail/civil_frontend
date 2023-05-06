/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'

import useFetchAppData from '../hooks/useFetchAppData'

import useInitUserSession from '../hooks/useInitUserSession'
import useSetupInterceptorsEffect from '../../../api/util/axiosInstance.tsx'
import useGetUserId from '../hooks/useGetUserId'

function LoadingBridge({ children }) {
  const { userId } = useGetUserId()
  useSetupInterceptorsEffect()
  useInitUserSession(userId)
  useFetchAppData()
  return (
    <>
      {(userId || localStorage.getItem('previousSignInMethod') == null) && children({ userId })}
    </>
  )
}

const LoadingBridgeWithSpinner = LoadingBridge

export default LoadingBridgeWithSpinner
