import React from 'react'
import {
  SignIn,
  SignUp,
} from '@clerk/clerk-react'

import { useLocation } from 'react-router-dom'
import { SignInContainer } from './Style/index'

export const SignInComponent = () => {
  const { state } = useLocation()
  console.log(state)
  return (
    <SignInContainer>
      <SignIn signUpUrl="/signup" afterSignInUrl={state?.redirectPath} />
    </SignInContainer>
  )
}

export const SignUpComponent = () => (
  <SignInContainer>
    <SignUp signInUrl="/signin" />
  </SignInContainer>
)

export default SignInComponent
