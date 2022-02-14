import React from 'react'
import useGoToUserProfile from '../../hooks/routing/useGoToUserProfile'
import { Thumb } from './Style/Index'

const UserIcon = ({ width, iconSrc, userId }) => {
  const goToUserProfile = useGoToUserProfile(userId)
  return (
    <Thumb
      width={width}
      src={iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png'}
      onClick={goToUserProfile}
    />
  )
}

export default UserIcon
