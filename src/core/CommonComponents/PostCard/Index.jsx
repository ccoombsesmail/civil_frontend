/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useMemo, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from 'primereact/card'
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace'
import { Button } from 'primereact/button'
import { MARKED, REMOVED, UNDER_REVIEW } from '../../../enums/report_status'
import UserInfoHeader from '../UserInfoHeader/Index'
import { getTimeSince } from '../../../generic/string/dateFormatter'

import { Body, Description } from './Style'
import { DISCUSSION, SPACE } from '../../../enums/content_type'
import Editor from '../Lexical/ReadOnlyEditor.tsx'
import LinkSection from '../LinkSection/Index'
import { truncateAtIndex } from '../../../generic/string/truncateAtIndex'
import useGoToSpace from '../../hooks/routing/useGoToSpace'
import ModerationOverlay from './components/ModerationOverlay/ModerationOverlay'

function PostCard({
  children,
  onClick,
  space,
  discussion,
  showLinks,
  CardToolbar,
  setBlocked,
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
    spaceId,
    discussionCount,
    commentCount,
    likeState,
  } = space || discussion || {}
  const [shouldBlur, setShouldBlur] = useState(reportStatus === UNDER_REVIEW || reportStatus === REMOVED || reportStatus === MARKED)
  const goToSpace = useGoToSpace(spaceId)

  const spaceHeaderClickHandler = useCallback((e) => {
    goToSpace()
    e.stopPropagation()
  }, [])

  const onContainerClick = useMemo(
    () => (shouldBlur ? () => null : onClick),
    [shouldBlur],
  )

  const titleTemplate = (
    <>
      { spaceTitle
      && (
      <div className={`flex align-items-center ${reportStatus === 'REMOVED' ? 'pb-3' : ''}`} onClick={(e) => e.stopPropagation()}>
        <h5 className="text-base mb-0 ml-2">Space</h5>
        <b className="mx-2">→</b>
        <Button
          link
          onClick={spaceHeaderClickHandler}
          label={`${truncateAtIndex(spaceTitle, 50)}`}
          className="p-0 text-primary-400"
        />
        <b className="text-base ml-auto mr-2 font-semibold" onClick={(e) => e.stopPropagation()}>
          {' '}
          ·
          {' '}
          {spaceCategory}
          {' '}
        </b>
      </div>
      )}
      <h1 onClick={(e) => e.stopPropagation()} className="p-card-title mt-2 ml-2">
        {title}
      </h1>
    </>
  )

  const footerTemplate = useMemo(() => (reportStatus === 'REMOVED' ? null : (
    <>
      {CardToolbar}

      <div className="w-full px-3 pb-1 text-sm text-600 flex justify-content-end">
        <span>
          {discussionCount}
          {' '}
          discussions
        </span>
        <b className="mx-2">•</b>
        <span>
          {commentCount}
          {' '}
          comments
        </span>
      </div>
    </>
  )), [discussionCount, commentCount, likeState])

  return (
    <Card
      onClick={onContainerClick}
      title={titleTemplate}
      className="relative sm:w-full md:w-full border-noround-top"
      pt={{
        body: {
          className: `${reportStatus === 'REMOVED' ? 'pb-4 px-0' : 'p-0'}`,
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
          discussion={discussion}
          category={category}
        />
      )}
      footer={footerTemplate}
    >
      {(shouldBlur) && (
        <ModerationOverlay
          setShouldBlur={setShouldBlur}
          setBlocked={setBlocked}
          contentId={id}
          contentType={space ? SPACE : DISCUSSION}
          reportStatus={reportStatus}
          showNavigationToTribunal={
            reportStatus === UNDER_REVIEW && !pathname.includes('tribunal')
          }
        />
      )}
      <Body shouldBlur={shouldBlur} hidden={reportStatus === 'REMOVED'}>
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
