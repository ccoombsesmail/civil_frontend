import React from 'react'
import { Link } from 'react-router-dom'
import { MenuTime } from '../MenuTime/Index'
import { getTimeSince } from '../../../../../../generic/string/dateFormatter'
import { MiddleContainer } from '../Style'

import { TribunalSelection } from '../../../../../../enums/notification_types'
import { Gavel2 } from '../../../../../../svgs/svgs'

const TribunalSelectionNotification = ({ notification }) => {
  const {
    createdAt, id, contentType, reportedContentId,
  } = notification
  return (
    <>
      <MiddleContainer>
        <Gavel2 size="5vh" />
        <h3>
          You have been selected for
          {' '}
          <Link to={`/tribunal/${contentType}/${reportedContentId}`}>
            Comment!
          </Link>
        </h3>

      </MiddleContainer>
      <MenuTime
        time={getTimeSince(createdAt)}
        id={id}
        eventType={TribunalSelection}
      />
    </>
  )
}

export default TribunalSelectionNotification
