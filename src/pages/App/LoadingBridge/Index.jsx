import React, { useState, useEffect } from 'react'

import useFetchAppData from '../hooks/useFetchAppData'

import useSessionType from '../../hooks/permissions/useSessionType'
import IsLoadingHOC from '../../../hocs/IsLoadingHOC'
import useInitUserSession from '../hooks/useInitUserSession'
import useSetupInterceptorsEffect from '../../../api/util/axiosInstance.ts'
import { useGetCurrentUserQuery } from '../../../api/services/session.ts'
import useGetUserId from '../hooks/useGetUserId'

const LoadingBridge = ({ children, setIsLoading }) => {
  const [isUserDataPending, setIsUserDataPending] = useState(true)

  const { userId } = useGetUserId()
  const { isLoading, isError } = useGetCurrentUserQuery(userId, {
    skip: !userId,
  })

  const sessionType = useSessionType()
  useSetupInterceptorsEffect(isLoading)

  useInitUserSession(userId, isLoading, isError)
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
      {(!isUserDataPending && userId !== null) && children({ userId })}
    </>
  )
}

const LoadingBridgeWithSpinner = IsLoadingHOC(LoadingBridge, '300px', true)

export default LoadingBridgeWithSpinner
