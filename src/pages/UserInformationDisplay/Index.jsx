import {
  SignedIn, SignedOut,
} from '@clerk/clerk-react'
import React, { useContext, useEffect, useMemo } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import { useSelector } from 'react-redux'
import { ClerkSvg } from '../../svgs/svgs'
import ExpandButton from '../CommonComponents/Buttons/ExpandButton/Index'
import useSessionType from '../hooks/permissions/useSessionType'
import useGoToAuthPage from '../hooks/routing/useGoToAuthPage'
import {
  Container, Icon, IdentityProviderContainer, IdentityImg,
  IdentityProviderInnerContainer, AuthButtonContainer, PassesContainer, StyledLine,
} from './Style'
import { longUsernameDisplay } from '../../generic/string/longUsernameDisplay'
import CaptchaGateway from '../../civic/components/CaptchGateway/CaptchaGateway'
import UniquenessGateway from '../../civic/components/UniquenessGateway/UniquenessGateway'
import useGetCurrentUser from '../App/hooks/useGetCurrentUser'

const UserInformationDisplay = () => {
  const { currentUser } = useGetCurrentUser()
  const {
    signedInViaClerk,
    signedInViaDID,
    signedInViaCivic,
  } = useSessionType()

  const [isSignedIn, authMethod] = useMemo(() => {
    if (signedInViaClerk) return [true, 'Authenticated With Clerk']
    if (signedInViaDID) return [true, 'Authenticated With Elastos DID']
    if (signedInViaCivic) return [true, 'Auth Method ⟶ Civic DID']
    return [false, '']
  }, [signedInViaClerk, signedInViaDID, signedInViaCivic])

  const goToAuthPage = useGoToAuthPage()
  const disconnectListItem = document.getElementsByClassName('wallet-adapter-dropdown-list-item')[2]

  useEffect(() => {
    disconnectListItem?.addEventListener('click', () => {
      localStorage.setItem('walletName', null)
      localStorage.setItem('walletName2', null)
      // localStorage.setItem('previousSignInMethod', null)
    })
  }, [disconnectListItem])

  const user = useMemo(() => {
    if (!currentUser) {
      return {
        username: '',
        tag: '',
        numFollowers: '-',
        numFollowed: '-',
        numPosts: '-',
        iconSrc: 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png',
      }
    }
    return currentUser
  }, [currentUser])

  return (
    <Container>
      <Icon className="img" src={user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png'} alt="" />
      <h1>
        {longUsernameDisplay(user.username)}
      </h1>
      <h2>{user.tag ? `@${user.tag}` : ''}</h2>
      <div className="social">
        <h3>
          {user.numFollowers}
          <small>followers</small>
        </h3>
        <h3>
          {user.numFollowed}
          <small>following</small>
        </h3>
        <h3>
          {user.numPosts}
          <small>posts</small>
        </h3>
      </div>
      <SignedIn>
        <IdentityProviderContainer className="center">
          <IdentityImg alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/icons8-checked-identification-documents-96+(1).png" />
          <IdentityProviderInnerContainer>
            <span>Identity Provider: </span>
            {/* <IdentityProviderImg /> */}
            <ClerkSvg />
          </IdentityProviderInnerContainer>
        </IdentityProviderContainer>
      </SignedIn>
      <SignedOut>
        <AuthButtonContainer>
          {/* { isSignedIn && (
            <div style={{
              display: 'flex', flexDirection: 'column',
              width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: '1vw',
            }}
            >
              <IdentityIcon src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/icons8-checked-identification-documents-64.png" alt="" />
              <b>{authMethod}</b>
            </div>
          )} */}
          {
            signedInViaCivic ? (
              <div>
                <WalletMultiButton />
                <StyledLine />
                <b>Civic Passes</b>
                <PassesContainer>
                  <CaptchaGateway />
                  {/* <UniquenessGateway /> */}
                </PassesContainer>
              </div>

            ) : (
              <div style={{ display: 'flex', width: '100%' }}>

                <ExpandButton
                  width="45%"
                  height="2.5vw"
                  type="button"
                  backgroundColor="var(--m-primary-btn-color)"
                  onClick={goToAuthPage}
                >
                  Sign Up
                </ExpandButton>
                <ExpandButton
                  width="45%"
                  height="2.5vw"
                  type="button"
                  backgroundColor="var(--m-primary-btn-color)"
                  onClick={goToAuthPage}
                >
                  Sign In
                </ExpandButton>
              </div>

            )
          }

        </AuthButtonContainer>

      </SignedOut>

    </Container>
  )
}
export default UserInformationDisplay
