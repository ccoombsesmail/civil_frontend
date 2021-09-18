import React from 'react'
import { GiDiscussion } from 'react-icons/gi'
import { useHistory } from 'react-router'

import IconButton from '../../../CommonComponents/IconButton/Index'
import useGoToSubTopic from '../../hooks/useGoToSubTopic'

export const GoToSubTopic = (params) => {
  const goToSubTopic = useGoToSubTopic(params.data.id)
  return (
    <IconButton
      onClick={goToSubTopic}
      icon={<GiDiscussion color="var(--m-primary-color)" size={'2em'}/>}
    />
  )

}