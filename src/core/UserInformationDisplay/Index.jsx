// import {
//   SignedIn, SignedOut,
// } from '@clerk/clerk-react'
import React, { useMemo } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import { Link } from 'react-router-dom'
import ExpandButton from '../CommonComponents/Buttons/ExpandButton/Index'
import useSessionType from '../hooks/permissions/useSessionType'
import useGoToAuthPage from '../hooks/routing/useGoToAuthPage'
import {
  Container, Icon, AuthButtonContainer, PassesContainer, StyledLine, GetVerifiedContainer,
} from './Style'
import { longUsernameDisplay } from '../../generic/string/longUsernameDisplay'
import { CaptchaGatewayDesktop } from '../../civic/components/CaptchGateway/CaptchaGateway'
import UniquenessGateway, { UniquenessStatus } from '../../civic/components/UniquenessGateway/UniquenessGateway'
import useGetCurrentUser from '../App/hooks/useGetCurrentUser'
import useReplaceDisconnectButtonEffect from '../../civic/hooks/useReplaceDisconnectButtonEffect'
import { CivicArrow } from '../../svgs/svgs'

function UserInformationDisplay({ setIsOpen, isOpen }) {
  const { currentUser } = useGetCurrentUser()
  const {
    // signedInViaClerk,
    // signedInViaDID,
    signedInViaCivic,
  } = useSessionType()

  // const [isSignedIn, authMethod] = useMemo(() => {
  //   // if (signedInViaClerk) return [true, 'Authenticated With Clerk']
  //   if (signedInViaDID) return [true, 'Authenticated With Elastos DID']
  //   if (signedInViaCivic) return [true, 'Auth Method ⟶ Civic DID']
  //   return [false, '']
  // }, [signedInViaDID, signedInViaCivic]) // signedInViaClerk

  const goToAuthPage = useGoToAuthPage()
  useReplaceDisconnectButtonEffect('user-panel')
  const user = useMemo(() => {
    if (!currentUser) {
      return {
        username: '',
        tag: '',
        numFollowers: '-',
        numFollowed: '-',
        numPosts: '-',
        iconSrc: 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png',
      }
    }
    return currentUser
  }, [currentUser])

  return (
    <Container className="animation-duration-3000 animate-width">
      <Icon className="img animation-duration-1000 fadeinright" src={user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'} alt="" />
      <h1 className="text-2xl">
        {longUsernameDisplay(user.username)}
      </h1>
      <h2 className="text-lg">{user.tag ? `@${user.tag}` : ''}</h2>
      <div className="social">
        <h3 className="text-xl">
          {user.numFollowers}
          <small>followers</small>
        </h3>
        <h3 className="text-xl">
          {user.numFollowed}
          <small>following</small>
        </h3>
        <h3 className="text-xl">
          {user.numPosts}
          <small>posts</small>
        </h3>
      </div>
      <AuthButtonContainer id="user-panel">
        {
            signedInViaCivic ? (
              <div>
                <WalletMultiButton />
                <StyledLine />
                <b>Civic Passes</b>
                <PassesContainer>
                  <CaptchaGatewayDesktop />
                  <UniquenessStatus />
                </PassesContainer>
                <Link to="/authenticate/civic-verify">
                  <GetVerifiedContainer>
                    <CivicArrow />
                    <span className='text-md'>
                      Get Verified
                    </span>
                    <CivicArrow />
                  </GetVerifiedContainer>
                </Link>

              </div>

            ) : (
              <div style={{ display: 'flex', width: '100%' }}>

                <ExpandButton
                  width="45%"
                  height="2.5vw"
                  type="button"
                  bgColor="var(--primary-color)"
                  onClick={goToAuthPage}
                >
                  Sign Up
                </ExpandButton>
                <ExpandButton
                  width="45%"
                  height="2.5vw"
                  type="button"
                  bgColor="var(--primary-color)"
                  onClick={goToAuthPage}
                >
                  Sign In
                </ExpandButton>
              </div>

            )
          }

      </AuthButtonContainer>
    </Container>
  )
}
export default UserInformationDisplay
