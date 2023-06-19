import React, { memo } from 'react'
import { Card } from 'primereact/card'
import { Avatar } from 'primereact/avatar'
import { useNavigate } from 'react-router-dom'
import UsernameAndTag from '../../../CommonComponents/UsernameAndTag/Index'

import { getTimeSince } from '../../../../generic/string/dateFormatter'

function SpaceRecItem({ rec }) {
  const navigate = useNavigate()
  const subTitle = (
    <div className="flex">
      <Avatar image={rec.createdByIconSrc} />
      <UsernameAndTag
        usernameDisplay={rec.createdByUsername}
        userId={rec.createdByUserId}
        userTag={rec.createdByUserTag}
      />
      <span className="ml-auto m-auto">
        {`${getTimeSince(rec.createdAt)} ago · ${rec.category}`}
      </span>
    </div>
  )
  return (
    <Card
      onClick={() => navigate(`/home/spaces/${rec.id}/discussions/`)}
      title={`${rec.title.substring(0, 200)}...`}
      subTitle={subTitle}
      className="w-full p-0 m-0 flex flex-row hover:surface-300 cursor-pointer"
    >
      <p className="m-0">
        {`${rec.editorTextContent.substring(0, 200)}...`}
      </p>
    </Card>
  )
}

export default memo(SpaceRecItem)
