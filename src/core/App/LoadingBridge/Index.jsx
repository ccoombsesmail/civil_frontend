/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react'

import useFetchAppData from '../hooks/useFetchAppData'

import useSessionType from '../../hooks/permissions/useSessionType'
import IsLoadingHOC from '../../../hocs/IsLoadingHOC'
import useInitUserSession from '../hooks/useInitUserSession'
import useSetupInterceptorsEffect from '../../../api/util/axiosInstance.tsx'
import { useGetCurrentUserQuery } from '../../../api/services/session.ts'
import useGetUserId from '../hooks/useGetUserId'

function LoadingBridge({ children, setIsLoading }) {
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
      const { signedInViaDID } = sessionType
      if (signedInViaDID === undefined) { // signedInViaClerk === undefined
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
      {(!isUserDataPending) && children({ userId })}
    </>
  )
}

const LoadingBridgeWithSpinner = IsLoadingHOC(LoadingBridge, '300px', true)

export default LoadingBridgeWithSpinner
