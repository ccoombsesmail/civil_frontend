import React from 'react'
import useGoToUserProfileHook from '../../hooks/routing/useGoToUserProfile'
import { Thumb } from './Style/Index'

function UserIcon({ size, iconSrc, userId, className }) {
  const goToUserProfile = useGoToUserProfileHook(userId)
  console.log(className)
  return (
    <Thumb
      className={className}
      width={size}
      src={iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'}
      // onClick={goToUserProfile}
      alt=""
    />
  )
}

export default UserIcon
