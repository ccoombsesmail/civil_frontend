import React from 'react'
import {
  SignIn,
  SignUp,
} from '@clerk/clerk-react'

import { useLocation, useNavigate } from 'react-router-dom'
import {
  SignInContainer, DIDSignInContainer, CreateDidButton, DIDHeader,
  ElastosIcon, FlexDiv, Footer,
} from './Style/index'

export const SignInComponent = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  return (
    <SignInContainer>
      <SignIn signUpUrl="/authenticate/signup" afterSignInUrl={state?.redirectPath} />
      <DIDSignInContainer className="cl-component cl-sign-in">
        <FlexDiv>
          <DIDHeader>
            Own Your Identity
            <ElastosIcon src="https://civil-dev.s3.us-west-1.amazonaws.com/elastos_hero.png" alt="" />
          </DIDHeader>
        </FlexDiv>
        <CreateDidButton onClick={() => navigate('new-did')}>Decentralized ID Sign In</CreateDidButton>
        <CreateDidButton onClick={() => navigate('restore-did')}>Restore / Import DID</CreateDidButton>
        <Footer>
          <span>
            Passport To The SmartWeb
          </span>
        </Footer>
      </DIDSignInContainer>
    </SignInContainer>
  )
}

export const SignUpComponent = () => (
  <SignInContainer>
    <SignUp signInUrl="/authenticate" />
  </SignInContainer>
)

export default SignInComponent
