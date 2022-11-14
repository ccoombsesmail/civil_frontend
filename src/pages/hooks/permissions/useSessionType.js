import { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import useIsLoggedInViaDID from '../../DID/hooks/useIsLoggedInViaDID'
import useIsLoggedInViaCivic from '../../../civic/hooks/useIsLoggedInViaCivic.ts'

export default () => {
  const [sessionState, setSessionState] = useState({})
  const { isSignedIn } = useUser()
  const isLoggedInViaDID = useIsLoggedInViaDID()
  const isLoggedInViaCivic = useIsLoggedInViaCivic()
  useEffect(() => {
    const determineSessionState = async () => {
      // const loggedInViaDID = await isLoggedInViaDID()
      setSessionState({
        signedInViaClerk: isSignedIn,
        signedInViaDID: false,
        signedInViaCivic: isLoggedInViaCivic(),
      })
    }
    determineSessionState()
  }, [isLoggedInViaDID, isLoggedInViaCivic, isSignedIn])

  return sessionState
}
