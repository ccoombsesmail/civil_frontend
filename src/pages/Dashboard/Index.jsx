import React, { useEffect, Suspense } from 'react'
import { UserProfile } from '@clerk/clerk-react'

import { Container } from './Style'

import Header from './components/Header/Index'
import { Line } from '../CommonComponents/Line'

import BioForm from './components/BioForm/Index'
import CivicTest from '../AuthFlow/components/CivicTest/Index'
import useGetCurrentUser from '../App/hooks/useGetCurrentUser'

const Dashboard = () => {
  const { currentUser } = useGetCurrentUser()
  useEffect(() => {
    const clerkWrapper = document.getElementsByClassName('cl-main')[0]
    if (clerkWrapper) clerkWrapper.insertBefore(document.getElementById('bio-dashboard'), null)
  }, [])
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Header user={currentUser} />
        <Line />
        <UserProfile
          appearance={{
            variables: {
              fontSize: '1.2vw',
              fontSmoothing: 'antialiased',
              fontWeight: 900,
              fontFamily: 'Source Sans Pro, sans-serif',
            },
          }}
        />
        <CivicTest />
        <Line />
        <BioForm user={currentUser} />
      </Container>
    </Suspense>
  )
}

export default Dashboard
