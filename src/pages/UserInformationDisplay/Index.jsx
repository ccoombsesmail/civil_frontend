import {
  SignedIn, SignedOut,
} from '@clerk/clerk-react'
import React, { useMemo } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import { useSelector } from 'react-redux'
import { ClerkSvg, Blockchain } from '../../svgs/svgs'
import ExpandButton from '../CommonComponents/Buttons/ExpandButton/Index'
import useSessionType from '../hooks/permissions/useSessionType'
import useGoToAuthPage from '../hooks/routing/useGoToAuthPage'
import {
  Container, Icon, IdentityProviderContainer, IdentityImg,
  IdentityProviderInnerContainer, AuthButtonContainer,
} from './Style'
import { longUsernameDisplay } from '../../generic/string/longUsernameDisplay'

const UserInformationDisplay = () => {
  const currentUser = useSelector((s) => s.session.currentUser)

  const {
    signedInViaClerk,
    signedInViaDID,
    signedInViaCivic,
  } = useSessionType()

  const goToAuthPage = useGoToAuthPage()

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
        {/* <span>18</span> */}
      </h1>
      <h2>{user.tag ? `@${user.tag}` : ''}</h2>
      <div className="social">
        <h3>
          {user.numFollowers}
          <small>followers</small>
        </h3>
        <h3>
          {user.numFollowed}
          <small>followed</small>
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
          {
            signedInViaCivic ? (
              <WalletMultiButton
                className="wallet-button"
                startIcon={<Blockchain />}
              />
            ) : (
              <>

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
              </>

            )
          }

        </AuthButtonContainer>

      </SignedOut>

    </Container>
  )
}
export default UserInformationDisplay
