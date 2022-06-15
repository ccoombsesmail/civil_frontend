import React, { useState } from 'react'
import { Tab } from 'react-bootstrap'

import {
  SignIn,
  SignUp,
} from '@clerk/clerk-react'

import { useLocation, useNavigate } from 'react-router-dom'
import {
  SignInContainer, DIDSignInContainer, CreateDidButton, DIDHeader,
  ElastosIcon, FlexDiv, Footer, IconLink,
} from './Style/index'
import { ThemeTabNew } from '../../../CommonComponents/Tabs/Style'
import { Blockchain } from '../../../../svgs/svgs'

export const SignInComponent = () => {
  const { state } = useLocation()
  const [key, setKey] = useState('civil')

  const navigate = useNavigate()
  return (
    <SignInContainer>

      <ThemeTabNew
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab
          eventKey="civil"
          title={(
            <span>
              Civil Sign Up
              <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png" />
            </span>
          )}
        >
          <SignIn signUpUrl="/authenticate/signup" afterSignInUrl={state?.redirectPath} />
        </Tab>
        {/* <SignInContainer> */}
        <Tab
          eventKey="decentralized"
          title={(
            <span>
              Decentralized Identity (Web 3)
              <Blockchain />
            </span>
          )}
        >

          <DIDSignInContainer className="cl-component cl-sign-in">
            <FlexDiv>
              <DIDHeader>
                Own Your Identity
                <IconLink href="https://www.elastos.org/" target="_blank" rel="noreferrer">
                  <ElastosIcon src="https://civil-dev.s3.us-west-1.amazonaws.com/elastos_hero.png" alt="" />
                </IconLink>
              </DIDHeader>
            </FlexDiv>
            <CreateDidButton onClick={() => navigate('new-did')}>Create Decentralized Identity</CreateDidButton>
            <CreateDidButton onClick={() => navigate('restore-did')}>Restore / Import DID</CreateDidButton>
            <Footer>
              <span>
                Passport To The SmartWeb
              </span>
            </Footer>
          </DIDSignInContainer>

        </Tab>

        {/* </SignInContainer> */}
      </ThemeTabNew>
    </SignInContainer>

  )
}

export const SignUpComponent = () => (
  <SignInContainer>
    <SignUp signInUrl="/authenticate" />
  </SignInContainer>
)

export default SignInComponent
