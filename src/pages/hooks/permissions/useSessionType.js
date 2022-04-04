import { useMemo } from 'react'
import { useUser } from '@clerk/clerk-react'
import useIsLoggedInViaDID from '../../DID/hooks/useIsLoggedInViaDID'

export default () => {
  const { user } = useUser({ withAssertions: true })

  const isLoggedInViaDID = useIsLoggedInViaDID()
  return useMemo(async () => {
    const loggedInViaDID = await isLoggedInViaDID()
    return {
      signedInViaClerk: Boolean(user),
      signedInViaDID: loggedInViaDID,
    }
  }, [isLoggedInViaDID, user])
}
