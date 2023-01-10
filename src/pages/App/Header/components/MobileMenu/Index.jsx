/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import { Link } from 'react-router-dom'
import { Container, NotificationMarkMenu, PassesOuterContainer } from './Style/index'
import {
  UserSettingsSvg,
  NotificationSvg,
  Gavel2,
} from '../../../../../svgs/svgs'
import { IconContainer, NotificationMark } from '../HeaderNavItem/Style'
import { Line } from '../../../../CommonComponents/Line'
import { PassesContainer } from '../../../../UserInformationDisplay/Style'
import { CaptchaGatewayDesktop } from '../../../../../civic/components/CaptchGateway/CaptchaGateway'

const MobileMenu = ({
  numUnreadUserNotifications,
  numUnreadTribunalNotifications,
}) => {
  let numNotifications
  let isUnreadNotifs = true
  const unreadUserNotif = numUnreadUserNotifications ? Number(numUnreadUserNotifications) : 0
  const unreadTribunalNotif = numUnreadTribunalNotifications ? Number(numUnreadTribunalNotifications) : 0

  if (Boolean(numUnreadUserNotifications) || Boolean(numUnreadTribunalNotifications)) {
    numNotifications = unreadUserNotif + unreadTribunalNotif
  } else {
    isUnreadNotifs = false
  }

  return (
    <Container>
      <input type="checkbox" id="hamburger1" />
      <label htmlFor="hamburger1" />

      {isUnreadNotifs && (
        <NotificationMarkMenu>
          {numNotifications}
        </NotificationMarkMenu>
      )}

      <ul className="nav-links">
        <li>
          <UserSettingsSvg />
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <IconContainer>
            {Boolean(numUnreadUserNotifications) && (
              <NotificationMark>{numUnreadUserNotifications}</NotificationMark>
            )}
            <NotificationSvg />

          </IconContainer>
          <Link to="/home/notifications">Notifications</Link>
        </li>
        <li>
          <IconContainer>
            {Boolean(numUnreadTribunalNotifications) && (
              <NotificationMark>
                {numUnreadTribunalNotifications}
              </NotificationMark>
            )}
            <Gavel2 />
          </IconContainer>
          <Link to="/home/notifications-tribunal">Tribunal Notifications</Link>
        </li>
        <li>
          <PassesOuterContainer>
            <b>Civic Passes</b>
            <Line />
            <PassesContainer>
              <CaptchaGatewayDesktop />
              {/* <UniquenessGateway /> */}
            </PassesContainer>
          </PassesOuterContainer>

        </li>
      </ul>
    </Container>
  )
}

export default MobileMenu
