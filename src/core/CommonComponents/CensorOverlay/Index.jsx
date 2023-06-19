import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import { WarningSvg, ScalesSvg } from '../../../svgs/svgs'

import {
  Message,
  Warning,
  MessageContainer,
} from './Style'

function CensorOverlay({
  setShouldBlur, contentId, contentType, showNavigationToTribunal,
}) {
  const navigate = useNavigate()
  return (
    <MessageContainer
      onClick={(e) => {
        e.stopPropagation()
        setShouldBlur((prev) => !prev)
      }}
      contentType={contentType}
    >
      <Message>
        This Content Has Been Reported By Users or Flagged By
        AI And May Contain Explicit Visuals Or Offensive Language
      </Message>
      <Warning>
        <div>
          <WarningSvg />
          Click To See Content At Your Own Risk!
        </div>
      </Warning>
      { showNavigationToTribunal ? (
        <Button
          className="font-bold"
          onClick={() => navigate(`/tribunal/${contentType}/${contentId}`)}
        >
          <ScalesSvg />
          See Ongoing Review Process
          <ScalesSvg />
        </Button>
      ) : <span />}

    </MessageContainer>
  )
}

export default memo(CensorOverlay)
