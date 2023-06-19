/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo } from 'react'
import { AuthenticationSvg } from '../../../svgs/svgs'
import UserIcon from '../UserIcon/Index'

import {
  Header, BadgeContainer, CategoryAndTime, Left, Right,
} from './Style'
import ThemeTooltip from '../Tooltip/Index'
import UsernameAndTag from '../UsernameAndTag/Index'
import { CAPTCHA_VERIFIED, FACE_ID_VERIFIED, FACE_ID_AND_CAPTCHA_VERIFIED } from '../../../enums/UserVerifcationType'
import { longUsernameDisplay } from '../../../generic/string/longUsernameDisplay'
import WatchButton from './components/WatchButton/Index'

export function RobotIcon() {
  return (
    <img src="https://civic.me/static/media/bot_icon.f8d363e6d1ab7990da7126f8fa6a67ab.svg" alt="" />
  )
}

function UserInfoHeader({
  time, username, userId, iconSrc, category, userTag, userVerificationType, space, onClick = () => null,
}) {
  const usernameDisplay = userId?.startsWith('did') ? `${username.substring(0, 12)}` : username
  const captchaVerified = userVerificationType === FACE_ID_AND_CAPTCHA_VERIFIED || userVerificationType === CAPTCHA_VERIFIED
  const faceIdVerified = userVerificationType === FACE_ID_AND_CAPTCHA_VERIFIED || userVerificationType === FACE_ID_VERIFIED

  return (
    <Header onClick={onClick}>
      <Left>
        <UserIcon userId={userId} iconSrc={iconSrc} width="3vw" />
        <UsernameAndTag
          usernameDisplay={usernameDisplay}
          userId={userId}
          userTag={userTag}
        />
        <BadgeContainer>

          <ThemeTooltip
            Icon={RobotIcon}
            bgColor={captchaVerified ? 'var(--m-civic-theme-main-color)' : 'lightgray'}
            tooltipHeader={captchaVerified ? 'Captcha Verified' : 'NOT Captcha Verified'}
            tooltipText={captchaVerified
              ? `User ${longUsernameDisplay(username)} Was Captcha Verfied At The Time This Content Was Created. It Is Very Unlikely This Content Was Created By A Bot`
              : 'User Was Not CAPTCHA Verfied At The Time of Creating This Content, Meaning There Is A Chance A Bot Created This Content'}
            grow="true"
          />
          <ThemeTooltip
            Icon={AuthenticationSvg}
            bgColor={faceIdVerified ? 'var(--m-civic-theme-main-color)' : 'lightgray'}
            tooltipHeader={faceIdVerified ? 'Face ID Verified' : 'Not Face ID Verified'}
            tooltipText={faceIdVerified
              ? `User ${longUsernameDisplay(username)} Is A Verified Unique User`
              : 'User Was NOT A Verified Unique User At The Time of Creating This Content'}
            grow="true"
          />
        </BadgeContainer>

      </Left>
      <Right>
        { space ? <WatchButton space={space} /> : null }
        <CategoryAndTime>
          <span>
            {category}
          </span>
          <b>·</b>
          <time>
            {time}
            {' '}
            ago
          </time>

        </CategoryAndTime>
      </Right>

    </Header>
  )
}

export default memo(UserInfoHeader)
