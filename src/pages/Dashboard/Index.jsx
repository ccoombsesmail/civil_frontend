import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container } from './Style'
import userActions from '../../redux/actions/users/index'

import useBindDispatch from '../hooks/useBindDispatch'
import Header from './components/Header/Index'

const Dashboard = () => {
  const { getUser } = useBindDispatch(userActions)
  const user = useSelector((s) => s.session.currentUser)
  const userData = useSelector((s) => s.users.list).find((u) => u.id === user.id)
  useEffect(() => {
    if (user) getUser(user.id)
  }, [user])

  return (
    <Container>
      <Header user={userData} />
    </Container>
  )
}

export default Dashboard
