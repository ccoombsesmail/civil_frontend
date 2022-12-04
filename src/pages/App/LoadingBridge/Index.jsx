import React, { useState, useEffect } from 'react'

import useFetchAppData from '../hooks/useFetchAppData'

import useSessionType from '../../hooks/permissions/useSessionType'
import IsLoadingHOC from '../../../hocs/IsLoadingHOC'
import useInitUserSession from '../../hooks/auth/useInitUserSession'
import useSetupInterceptorsEffect from '../../hooks/auth/useSetupInterceptorsEffect'



const LoadingBridge = ({ children, setIsLoading }) => {
  const [isUserDataPending, setIsUserDataPending] = useState(true)
  const sessionType = useSessionType()
  useSetupInterceptorsEffect()

  useInitUserSession()
  useFetchAppData()
  useEffect(() => {
    setIsLoading(true)
    const get = async () => {
      const { signedInViaClerk, signedInViaDID } = sessionType
      if (signedInViaClerk === undefined || signedInViaDID === undefined) {
        setIsUserDataPending(true)
        return
      }
      setIsUserDataPending(false)
      setIsLoading(false)
    }
    get()
  }, [sessionType])

  return (
    <>
      {!isUserDataPending && children }
    </>
  )
}

const LoadingBridgeWithSpinner = IsLoadingHOC(LoadingBridge, '300px', true)

export default LoadingBridgeWithSpinner