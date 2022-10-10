import React from 'react'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../generic/string/dateFormatter'
import { MiddleContainer, LeftContainer } from '../Style'

import { TribunalSelection } from '../../../../enums/notification_types'
import { Gavel2 } from '../../../../svgs/svgs'
import UsernameAndTag from '../../../CommonComponents/UsernameAndTag/Index'

const TribunalSelectionNotification = ({ notification }) => {
  const { createdBy, reportedUserId, userTag } = notification
  return (
    <>
      <LeftContainer>
        <h3>
          <b>
            Reportee
          </b>
        </h3>
        <UsernameAndTag
          usernameDisplay={createdBy}
          userId={reportedUserId}
          userTag={userTag}
        />
      </LeftContainer>
      <MiddleContainer>
        <Gavel2 size="5vh" />
        <h3>
          You have been selected for Jury Duty!
        </h3>

      </MiddleContainer>
      <MenuTime
        time={getTimeSince(notification.createdAt)}
        id={notification.id}
        eventType={TribunalSelection}
      />
    </>
  )
}

export default TribunalSelectionNotification
