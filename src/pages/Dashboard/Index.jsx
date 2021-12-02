import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { UserProfile } from '@clerk/clerk-react'

import { Container } from './Style'
import userActions from '../../redux/actions/users/index'

import useBindDispatch from '../hooks/redux/useBindDispatch'
import Header from './components/Header/Index'
import { Line } from '../CommonComponents/Line'

const Dashboard = () => {
  const { getUser } = useBindDispatch(userActions)
  const user = useSelector((s) => s.session.currentUser)
  const userData = useSelector((s) => s.users.list).find((u) => u.id === user.id)
  useEffect(() => {
    if (user) getUser(user?.clerkId)
  }, [user])

  return (
    <Container>
      <Header user={userData} />
      <Line />
      <UserProfile />
    </Container>
  )
}

export default Dashboard
