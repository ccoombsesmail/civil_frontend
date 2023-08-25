import React from 'react'
import useGoToUserProfile from '../../hooks/routing/useGoToUserProfile'
import { Thumb } from './Style/Index'

function UserIcon({ size, iconSrc, userId }) {
  const goToUserProfile = useGoToUserProfile(userId)
  return (
    <Thumb
      width={size}
      src={iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'}
      onClick={goToUserProfile}
      alt=""
      style={{
        width: size,
        height: size
      }}
    />
  )
}

export default UserIcon
