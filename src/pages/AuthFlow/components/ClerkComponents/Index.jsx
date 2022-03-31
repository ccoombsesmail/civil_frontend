import React from 'react'
import {
  SignIn,
  SignUp,
} from '@clerk/clerk-react'

import { useLocation, useNavigate } from 'react-router-dom'
import { SignInContainer, DIDSignInContainer, CreateDidButton } from './Style/index'

export const SignInComponent = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  return (
    <SignInContainer>
      <SignIn signUpUrl="/authenticate/signup" afterSignInUrl={state?.redirectPath} />
      <DIDSignInContainer className="cl-component cl-sign-in">
        <CreateDidButton onClick={() => navigate('new-did')}>Sign In With DID</CreateDidButton>
        <CreateDidButton onClick={() => navigate('restore-did')}>Restore / Import</CreateDidButton>
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
