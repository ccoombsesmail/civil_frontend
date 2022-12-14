import React from 'react'
import { useSelector } from 'react-redux'
import { useGetAllNotificationsQueryState } from '../../../../api/services/notifications'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import UserInformationDisplay from '../../../UserInformationDisplay/Index'
import {
  Middle, Left, Right, HomePageGrid,
} from '../../Style'
import NotificationItem from './components/NotificationItem/Index'
import {
  BorderContainer, NotificationList, Container, Header,
} from './Style'

const Notifications = () => {
  const { currentUser } = useGetCurrentUser()
  const { data: notifications, isLoading, isUninitialized } = useGetAllNotificationsQueryState(currentUser.userId)
  const { userNotifications } = notifications || {}
  return (
    <HomePageGrid>
      <Left>
        <UserInformationDisplay />
      </Left>
      <Middle>

        { isUninitialized ? null : (<Container id="notifications-container">

          <BorderContainer>
            <Header>
              <p>
                Recent Notifications
              </p>
            </Header>
            <NotificationList>
              {isLoading ? <CircleLoading /> : userNotifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </NotificationList>
          </BorderContainer>
        </Container>)
      }
      </Middle>
      <Right>
        <span>.</span>
      </Right>
    </HomePageGrid>
  )
}

export default Notifications
