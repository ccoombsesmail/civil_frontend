import React, { useState, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from 'primereact/card'
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace'
import { UNDER_REVIEW } from '../../../enums/report_status'
import UserInfoHeader from '../UserInfoHeader/Index'
import CensorOverlay from '../CensorOverlay/Index'
import { getTimeSince } from '../../../generic/string/dateFormatter'

import { Body, Description } from './Style'
import { SPACE } from '../../../enums/content_type'
import Editor from '../Lexical/ReadOnlyEditor.tsx'
import LinkSection from '../LinkSection/Index'
import { truncateAtIndex } from '../../../generic/string/truncateAtIndex'

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
    id,
    createdAt,
    createdByIconSrc,
    createdByUsername,
    createdByUserId,
    createdByTag,
    spaceCreatorIsDidUser,
    userVerificationType,
    reportStatus,
    title,
    category,
    spaceTitle,
    spaceCategory,
  } = space || discussion || {}
  const [shouldBlur, setShouldBlur] = useState(reportStatus === UNDER_REVIEW)
  const onContainerClick = useMemo(
    () => (shouldBlur ? () => null : onClick),
    [shouldBlur],
  )

  const titleTemplate = (
    <>
      { spaceTitle
      && (
      <div className="surface-ground border-bottom-1 text-base w-full flex align-items-center">
        <b className="font-semibold ml-2">
          Space:
        </b>
        <span className="font-normal text-700 ml-1">
          {truncateAtIndex(spaceTitle, 50)}
        </span>
        <span className="text-base ml-2">
          ·
        </span>
        <span className="block font-normal text-700 ml-1">
          {spaceCategory}
        </span>
      </div>
      )}
      <h1 className="p-card-title mt-2 ml-2">
        {title}
      </h1>
    </>
  )

  return (
    <Card
      onClick={onContainerClick}
      title={titleTemplate}
      className="relative sm:w-full md:w-full border-noround-top"
      pt={{
        body: {
          className: 'p-0',
        },
      }}
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
      footer={CardToolbar}
    >
      {shouldBlur && (
        <CensorOverlay
          setShouldBlur={setShouldBlur}
          contentId={id}
          contentType={SPACE}
          showNavigationToTribunal={
            reportStatus === UNDER_REVIEW && !pathname.includes('tribunal')
          }
        />
      )}
      <Body shouldBlur={shouldBlur}>
        {children}
        <Description onClick={(e) => e.stopPropagation()}>
          {title === 'General' ? null : <Editor />}
        </Description>
        {showLinks && (
          <Inplace onClick={(e) => e.stopPropagation()} className="m-3">
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
