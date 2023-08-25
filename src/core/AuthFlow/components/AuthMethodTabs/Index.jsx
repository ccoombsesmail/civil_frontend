import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

import { useNavigate } from 'react-router-dom'
import {
  SignInContainer, DIDSignInContainer, CreateDidButton, DIDHeader,
  ElastosIcon, FlexDiv, Footer, IconLink,
} from './Style/index'
import CivicTabContent from './components/CivicTabContent/Index'

export function SignInComponent() {
  const navigate = useNavigate()

  const civicHeaderTemplate = (options) => (
    <button type="button" onClick={options.onClick} className={options.className}>
      <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/civic-logo-orange.png" className="w-2 h-2" />
      {options.titleElement}
    </button>
  )

  const elastosHeaderTemplate = (options) => (
    <button type="button" onClick={options.onClick} className={options.className}>
      <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/elastos_hero.png" className="w-2 h-2" />
      {options.titleElement}
    </button>
  )

  return (
    <SignInContainer>

      <TabView>
        <TabPanel
          header="Civic"
          // headerTemplate={civicHeaderTemplate}

        >
          <CivicTabContent />
        </TabPanel>
        <TabPanel
          header="Elastos"
          disabled
          // headerTemplate={elastosHeaderTemplate}
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

        </TabPanel>

        {/* </SignInContainer> */}
      </TabView>
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
