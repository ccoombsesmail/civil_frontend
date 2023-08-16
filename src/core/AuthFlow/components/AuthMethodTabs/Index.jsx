import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
  SignInContainer, DIDSignInContainer, CreateDidButton, DIDHeader,
  ElastosIcon, FlexDiv, Footer, IconLink,
} from './Style/index'
import CivicTabContent from './components/CivicTabContent/Index'

const ThemeTabNew = styled(Tabs)`
  z-index: 9999;
  background-color: white;
  li {
    background-color: white;
    margin: 0 .5em 0 0;

    div {
      display: flex;
      align-items: center;
    }
  }

  svg, img {
    margin-left: 10px;
    @media only screen and (max-width: 800px) {
      display: none;
    }
    height: 2vw;
  }

  .nav-link.active {
    opacity: 1;
  }


 .nav-link {
    border-radius: .5em;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    transition: background-color .5s, opacity .5s;
    opacity: .5;

    color: black;
    font-weight: bold;
    font-size: 1.3vw;
    
    @media only screen and (max-width: 1200px) {
      font-size: 2vw;
    }

    @media only screen and (max-width: 600px) {
      font-size: 3vw;
      padding: .5rem .9rem;
      
    }

   
 }
 `

export function SignInComponent() {
  const [key, setKey] = useState('civic')

  const navigate = useNavigate()
  return (
    <SignInContainer>

      <ThemeTabNew
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab
          eventKey="civic"
          title={(
            <div>
              Civic: Web 3
              <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/civic-logo-orange.png" />
            </div>
          )}
        >
          <CivicTabContent />
        </Tab>
        {/* <Tab
          eventKey="civil"
          title={(
            <div>
              Civil-Clerk (Web 2)
              <img alt="" src="https://dashboard.clerk.dev/assets/logos/clerk.svg" />
            </div>
          )}
        > */}
        {/* <SignIn
            signUpUrl="/authenticate/signup"
            afterSignInUrl={state?.redirectPath}
            appearance={{
              variables: {
                fontSize: '1.2vw',
                fontSmoothing: 'antialiased',
                fontWeight: 900,
                fontFamily: 'Source Sans Pro, sans-serif',
              },
            }}
          /> */}
        {/* </Tab> */}
        {/* <SignInContainer> */}
        <Tab
          eventKey="decentralized"
          title={(
            <div>
              Elastos: Web 3
              <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/elastos_hero.png" />
            </div>
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

export function SignUpComponent() {
  return (
    <SignInContainer>
      {/* <SignUp signInUrl="/authenticate" /> */}
    </SignInContainer>
  )
}

export default SignInComponent
