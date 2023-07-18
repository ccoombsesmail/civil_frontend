import React, { useState } from 'react'
import { Button } from 'primereact/button'

import { useGetAllNotificationsQueryState } from '../../../api/services/notifications.ts'
import { CircleLoading } from '../../../svgs/spinners/CircleLoading'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'
import { Table, ColHeader, ColItem } from '../../CommonComponents/AppTable/Style'
import UserInformationDisplay from '../../UserInformationDisplay/Index'
import {
  Middle, Left, Right, HomePageGrid, DiscussionsGrid,
} from '../Style'
import NotificationItem from './components/NotificationItem/Index'
import {
  BorderContainer, Container, Header, GridContainer,
} from './Style'

function Notifications() {
  const { currentUser } = useGetCurrentUser()
  const { data: notifications, isLoading, isUninitialized } = useGetAllNotificationsQueryState(currentUser?.userId, { skip: !currentUser })
  const { userNotifications } = notifications || {}
  const [isOpen, setIsOpen] = useState(true)

  return (
    <GridContainer isOpen={isOpen}>
      <DiscussionsGrid isOpen={isOpen}>
        <Left>
          { isOpen ? <UserInformationDisplay isOpen={isOpen} /> : null }
        </Left>
        <Middle>

          { isUninitialized ? null : (
            <Container id="notifications-container">

              <BorderContainer>
                <Button
                  size="small"
                  icon={`pi ${isOpen ? 'pi-arrow-left' : 'pi-arrow-right'}`}
                  onClick={() => setIsOpen(!isOpen)}
                  className="absolute left-0 top-0 -translate-x-100 focus:shadow-none  border-noround-right"
                />
                <Header>
                  <p>
                    Recent Notifications
                  </p>
                </Header>
                <Table>
                  <thead>
                    <ColHeader gridTemplateCols="1fr 1fr 3fr 1fr">
                      <ColItem> From</ColItem>
                      <ColItem> Action</ColItem>
                      <ColItem> Description </ColItem>
                      <ColItem>  </ColItem>
                    </ColHeader>
                  </thead>
                  {isLoading ? <CircleLoading /> : userNotifications.map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                  ))}
                </Table>
              </BorderContainer>
            </Container>
          )}
        </Middle>
        <Right>
          <span>.</span>
        </Right>
      </DiscussionsGrid>
    </GridContainer>
  )
}

export default Notifications
