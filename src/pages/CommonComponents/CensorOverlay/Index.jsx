import React, { memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { WarningSvg, ScalesSvg } from '../../../svgs/svgs'
import { ThemeButton2 } from '../Button/Index'

import {
  Message,
  Warning,
  MessageContainer,
} from './Style'

const CensorOverlay = ({ setShouldBlur, contentId, contentType }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <MessageContainer onClick={() => setShouldBlur((prev) => !prev)} contentType={contentType}>
      <Message>
        This Topic Has Been Reported And May Contain Explicit Visuals Or Offensive Language
      </Message>
      <Warning>
        <div>
          <WarningSvg />
          Click To See Content At Your Own Risk!
        </div>
      </Warning>
      { !pathname.includes('tribunal') ? (
        <ThemeButton2 onClick={() => navigate(`/tribunal/${contentId}`)}>
          <ScalesSvg />
          Ongoing Review Process
          <ScalesSvg />
        </ThemeButton2>
      ) : <span />}

    </MessageContainer>
  )
}

export default memo(CensorOverlay)
