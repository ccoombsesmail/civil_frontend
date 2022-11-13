import React from 'react'
import { useSelector } from 'react-redux'
import UserInformationDisplay from '../../../UserInformationDisplay/Index'
import {
  Middle, Left, Right, HomePageGrid,
} from '../../Style'
import NotificationItem from './components/NotificationItem/Index'
import {
  BorderContainer, NotificationList, Container, Header,
} from './Style'

const Notifications = () => {
  const notifications = useSelector((s) => s.notifications.userNotificationsList)
  return (
    <HomePageGrid>
      <Left>
        <UserInformationDisplay />
      </Left>
      <Middle>

        <Container id="notifications-container">

          <BorderContainer>
            <Header>
              <p>
                Recent Notifications
              </p>
            </Header>
            <NotificationList>
              {notifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </NotificationList>
          </BorderContainer>
        </Container>
      </Middle>
      <Right>
        <span>.</span>
      </Right>
    </HomePageGrid>
  )
}

export default Notifications
