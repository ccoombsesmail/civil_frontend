import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { TabView, TabPanel } from 'primereact/tabview'

import UserInformationDisplay from '../../UserInformationDisplay/Index'
import {
  Middle, Left, Right, DiscussionsGrid,
} from '../Style'
import {
  BorderContainer, Container, GridContainer,
} from './Style'
import JurtDutyList from './components/JuryDutyList/JuryDutyList'
import NotificationList from './components/NotificationList/NotificationList'

function TribunalNotifications() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <GridContainer isOpen={isOpen}>
      <DiscussionsGrid isOpen={isOpen} gridLayout="1fr 2fr 1.5fr">
        <Left>
          { isOpen ? <UserInformationDisplay isOpen={isOpen} /> : null }
        </Left>
        <Middle>

          <Container id="notifications-container">

            <BorderContainer>
              <Button
                size="small"
                icon={`pi ${isOpen ? 'pi-arrow-left' : 'pi-arrow-right'}`}
                onClick={() => setIsOpen(!isOpen)}
                className="absolute left-0 top-0 -translate-x-100 focus:shadow-none border-noround-right"
              />
              <NotificationList className="hidden lg:block xl:block" />

              <TabView className="block lg:hidden xl:hidden">
                <TabPanel header="Tribunal Notifications">
                  <NotificationList />

                </TabPanel>
                <TabPanel header="Jury Duty">
                  <JurtDutyList />
                </TabPanel>

              </TabView>

            </BorderContainer>
          </Container>
        </Middle>
        <Right className="hidden lg:flex xl:flex">
          <JurtDutyList />
        </Right>
      </DiscussionsGrid>
    </GridContainer>
  )
}

export default TribunalNotifications
