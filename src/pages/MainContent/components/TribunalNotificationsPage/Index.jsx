import React from 'react'
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

const TribunalNotifications = () => {
  const { currentUser } = useGetCurrentUser()
  const { data: notifications, isLoading, isUninitialized } = useGetAllNotificationsQueryState(currentUser.userId)
  const { tribunalNotifications } = notifications || {}
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
            { isUninitialized ? null : ( <NotificationList>
              {isLoading ? <CircleLoading /> : tribunalNotifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </NotificationList>
            )
            }
          </BorderContainer>
        </Container>
      </Middle>
      <Right>
        <span>.</span>
      </Right>
    </HomePageGrid>
  )
}

export default TribunalNotifications
