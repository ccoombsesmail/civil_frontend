import React from 'react'
import { GiDiscussion } from 'react-icons/gi'
import { useHistory } from 'react-router'

import IconButton from '../../../CommonComponents/IconButton/Index'

export const GoToSubTopic = (params) => {
  const history = useHistory()
  console.log(params)
  return (
    <IconButton
      onClick={() => history.push(params.data.id)}
      icon={<GiDiscussion color="var(--m-primary-color)" size={'2em'}/>}
    />
  )

}