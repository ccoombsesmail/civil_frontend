import React, { memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { WarningSvg, ScalesSvg } from '../../../svgs/svgs'
import { ThemeButton2 } from '../Button/Index'
import ExpandButton from '../Buttons/ExpandButton/Index'

import {
  Message,
  Warning,
  MessageContainer,
} from './Style'

const CensorOverlay = ({ setShouldBlur, contentId, contentType, showNavigationToTribunal }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
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
        <ExpandButton
        backgroundColor="var(--m-primary-btn-color)"
        onClick={() => navigate(`/tribunal/${contentType}/${contentId}`)}
        >
          <ScalesSvg />
          See Ongoing Review Process
          <ScalesSvg />
        </ExpandButton>
      ) : <span />}

    </MessageContainer>
  )
}

export default memo(CensorOverlay)
