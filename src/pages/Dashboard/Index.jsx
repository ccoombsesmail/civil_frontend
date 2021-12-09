import React, { useEffect, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { UserProfile } from '@clerk/clerk-react'

import { Container } from './Style'
import sessionActions from '../../redux/actions/session/index'

import useBindDispatch from '../hooks/redux/useBindDispatch'
import Header from './components/Header/Index'
import { Line } from '../CommonComponents/Line'

const Dashboard = () => {
  const { getCurrentUser } = useBindDispatch(sessionActions)
  const user = useSelector((s) => s.session.currentUser)
  useEffect(() => {
    if (user) getCurrentUser(user?.id)
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Header user={user} />
        <Line />
        <UserProfile />
      </Container>
    </Suspense>
  )
}

export default Dashboard
