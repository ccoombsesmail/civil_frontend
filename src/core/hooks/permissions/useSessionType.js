import { useEffect, useState } from 'react'
import useIsLoggedInViaCivic from '../../../civic/hooks/useIsLoggedInViaCivic.ts'

export default () => {
  const [sessionState, setSessionState] = useState({})
  // const isLoggedInViaDID = useIsLoggedInViaDID()
  const isLoggedInViaCivic = useIsLoggedInViaCivic()
  useEffect(() => {
    const determineSessionState = async () => {
      // const loggedInViaDID = await isLoggedInViaDID()
      setSessionState({
        signedInViaDID: false,
        signedInViaCivic: isLoggedInViaCivic(),
      })
    }
    determineSessionState()
  }, [isLoggedInViaCivic])

  return sessionState
}
