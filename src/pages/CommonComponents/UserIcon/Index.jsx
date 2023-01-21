import React from 'react'
import useGoToUserProfile from '../../hooks/routing/useGoToUserProfile'
import { Thumb } from './Style/Index'

const UserIcon = ({ width, iconSrc, userId }) => {
  const goToUserProfile = useGoToUserProfile(userId)
  return (
    <Thumb
      width={width}
      src={iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'}
      onClick={goToUserProfile}
      alt=""
    />
  )
}

export default UserIcon
