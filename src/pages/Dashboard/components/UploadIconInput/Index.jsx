/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'

import { Label, UploadInput } from './Style'

const UploadIconInput = ({
  field, onChange, file, userIcon,
}) => {
  const { currentUser } = useGetCurrentUser()

  
  return (
    <Label userIcon={userIcon}>
      <img alt="" src={file || currentUser?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png'} />
      <UploadInput type="file" {...field} id={field.name} onChange={onChange} />
    </Label>

  )
}

export default memo(UploadIconInput)
