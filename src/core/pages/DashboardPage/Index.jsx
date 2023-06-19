import React, { useEffect, Suspense } from 'react'

import { Container, CivicPassesContainer } from './Style'

import Header from './components/Header/Index'
import { Line } from '../../CommonComponents/Line'

import BioForm from './components/BioForm/Index'
import { CaptchaGatewayDesktop } from '../../../civic/components/CaptchGateway/CaptchaGateway'

function Dashboard() {
  useEffect(() => {
    const clerkWrapper = document.getElementsByClassName('cl-main')[0]
    if (clerkWrapper) clerkWrapper.insertBefore(document.getElementById('bio-dashboard'), null)
  }, [])
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Header />
        <Line />
        <CivicPassesContainer>
          <b>Civic Passes</b>
          <CaptchaGatewayDesktop />
        </CivicPassesContainer>
        <Line />
        <BioForm />
      </Container>
    </Suspense>
  )
}

export default Dashboard
