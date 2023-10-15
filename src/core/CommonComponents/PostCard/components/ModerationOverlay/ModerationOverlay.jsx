import React, { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'

import {
  Message,
  Warning,
  MessageContainer,
} from './Style'
import { ScalesSvg, WarningSvg } from '../../../../../svgs/svgs'
import { MARKED, REMOVED, UNDER_REVIEW } from '../../../../../enums/report_status'
import { Line2 } from '../../../Line'

function RemovedOverlay() {
  return (
    <div
      className="w-30rem h-10rem align-items-center justify-content-center flex-column flex absolute m-auto bg-white top-50 left-50 border-round p-2"
      style={{zIndex: '9999999', transform: 'translate(-50%, -50%)'}}
    >
      Content Has Been Removed
      <i className="pi pi-shield" style={{ fontSize: '2.5rem' }} />
    </div>
  )
}

function UnderReviewOverlay({
  contentType, contentId, onClick, showNavigationToTribunal,
}) {
  const navigate = useNavigate()
  return (
    <>
      <Message>
        This Content Has Been Reported By Users or Flagged By
        AI And May Contain Explicit Visuals Or Offensive Language
      </Message>
      <Warning className="w-full flex justify-content-between mt-5">
        <i className="pi pi-shield block" style={{ fontSize: '2.5rem' }} />
        <div className="flex align-items-center">
          <WarningSvg />
          <Button label="Click To See Content At Your Own Risk!" text raised onClick={onClick} />
          <WarningSvg />
        </div>
        <i className="pi pi-shield block" style={{ fontSize: '2.5rem' }} />

      </Warning>
      { showNavigationToTribunal && (
      <Button
        className="font-bold mt-3"
        onClick={() => navigate(`/tribunal/${contentType}/${contentId}`)}
      >
        <ScalesSvg />
        See Ongoing Review Process
        <ScalesSvg />
      </Button>
      )}
    </>
  )
}

function MarkedOverlay({ onClick }) {
  return (
    <Message>
      <div className="w-full flex justify-content-between mb-5">
        <i className="pi pi-shield block" style={{ fontSize: '2.5rem' }} />
        <i className="pi pi-shield block" style={{ fontSize: '2.5rem' }} />

      </div>
      <i className="pi pi-users" style={{ fontSize: '2.5rem' }} />
      <p>
        This Content Was Reported By Users, and Found To Have
        {' '}
        <span className="text-orange-600">Violated</span>
        {' '}
        Community Guidlines By A Jury Of Peers
      </p>

      <br />
      <Line2 />
      <i className="pi pi-exclamation-triangle" style={{ fontSize: '2.5rem' }} />
      <p>
        This Content Likely Contains
        {' '}
        <span className="text-orange-600">Explicit</span>
        {' '}
        Visuals Or
        {' '}
        <span className="text-orange-600">Offensive</span>
        {' '}
        Language. Please View At Your Own
        {' '}
        <span className="text-orange-600">Risk</span>
      </p>
      {/* <br />
        <Line2 />
        The Content Can Be Re-Reported. If Another Seperate Jury Finds The Content To Be In Violation, It Will Be Removed */}
      <br />
      <Line2 />
      <Warning className="w-full flex justify-content-between mt-5">
        <i className="pi pi-shield block" style={{ fontSize: '2.5rem' }} />
        <div className="flex align-items-center">
          <WarningSvg />
          <Button label="Click To See Content At Your Own Risk!" text raise onClick={onClick} />
          <WarningSvg />
        </div>
        <i className="pi pi-shield block" style={{ fontSize: '2.5rem' }} />

      </Warning>
    </Message>
  )
}
function ModerationOverlay({
  setShouldBlur, contentId, contentType, showNavigationToTribunal, setBlocked, reportStatus,
}) {
  let content
  const onClick = useCallback((e) => {
    e.stopPropagation()
    setShouldBlur((prev) => !prev)
    setBlocked((prev) => !prev)
  }, [])

  switch (reportStatus) {
    case MARKED:
      content = (
        <MarkedOverlay onClick={onClick} />
      )
      break
    case UNDER_REVIEW:
      content = <UnderReviewOverlay contentId={contentId} contentType={contentType} onClick={onClick} showNavigationToTribunal={showNavigationToTribunal} />
      break
    case REMOVED:
      content = <RemovedOverlay />
      break
    default:
      break
  }
  return (
    <MessageContainer
      contentType={contentType}
    >
      {content}
    </MessageContainer>
  )
}

export default memo(ModerationOverlay)
