import React from 'react'
import { useSelector } from 'react-redux'
import NotificationItem from './components/NotificationItem/Index'
import {
  BorderContainer, NotificationList, Container, Header,
} from './Style'

const Notifications = () => {
  const notifications = useSelector((s) => s.notifications.list)
  return (
    <Container id="notifications-container">

      <BorderContainer>
        <Header>
          <p>
            Recent Notifications
          </p>
        </Header>
        <NotificationList>
          {notifications.map((notification) => <NotificationItem notification={notification} />)}
        </NotificationList>
      </BorderContainer>
    </Container>
  )
}

export default Notifications
