import React, {
  useState, useMemo,
} from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from 'primereact/card'
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace'
import { UNDER_REVIEW } from '../../../enums/report_status'
import UserInfoHeader from '../UserInfoHeader/Index'
import CensorOverlay from '../CensorOverlay/Index'
import { getTimeSince } from '../../../generic/string/dateFormatter'

import {
  Body,
  Description,
} from './Style'
import { SPACE } from '../../../enums/content_type'
import Editor from '../Lexical/ReadOnlyEditor.tsx'
import LinkSection from '../LinkSection/Index'

function PostCard({
  children,
  onClick,
  space,
  discussion,
  showLinks,
  CardToolbar,
}) {
  const { pathname } = useLocation()
  const {
    id, createdAt, createdByIconSrc, createdByUsername, createdByUserId, createdByTag, spaceCreatorIsDidUser, userVerificationType, reportStatus, title, category,
  } = space || discussion || {}
  const [shouldBlur, setShouldBlur] = useState(reportStatus === UNDER_REVIEW)
  const onContainerClick = useMemo(() => (shouldBlur ? () => null : onClick), [shouldBlur])

  return (
    <Card
      onClick={onContainerClick}
      title={title}
      className="relative sm:w-full md:w-full"
      header={(
        <UserInfoHeader
          iconSrc={createdByIconSrc}
          time={getTimeSince(createdAt)}
          username={createdByUsername}
          userId={createdByUserId}
          userTag={createdByTag}
          spaceCreatorIsDidUser={spaceCreatorIsDidUser}
          userVerificationType={userVerificationType}
          space={space}
          category={category}
        />
    )}
      footer={(
        CardToolbar
      )}
    >

      { shouldBlur && (
      <CensorOverlay
        setShouldBlur={setShouldBlur}
        contentId={id}
        contentType={SPACE}
        showNavigationToTribunal={reportStatus === UNDER_REVIEW && !pathname.includes('tribunal')}
      />
      )}
      <Body shouldBlur={shouldBlur}>
        {children}
        <Description onClick={(e) => e.stopPropagation()}>
          <Editor />
        </Description>
        {showLinks
        && (
          <Inplace
            onClick={(e) => e.stopPropagation()}
            className="m-3"
          >
            <InplaceDisplay>
              <i className="chevron-down transition-transform transition-duration-500 bg-no-repeat h-1rem w-1rem mr-2" />
              References
            </InplaceDisplay>
            <InplaceContent>
              <LinkSection space={space} showLinks={showLinks} />
            </InplaceContent>
          </Inplace>
        )}
      </Body>
    </Card>
  )
}

export default PostCard
