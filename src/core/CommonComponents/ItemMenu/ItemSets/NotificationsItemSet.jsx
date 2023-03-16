import React from 'react'
import {
  DeleteSvg, ReadSvg,
} from '../../../../svgs/svgs'
import {
  ActionMenuItem,
} from '../Style/index'
import { useUpdateNotificationToReadMutation, useDeleteNotificationMutation } from '../../../../api/services/notifications.ts'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'

function NotificationsItemSet({ notificationType, id }) {
  const [deleteNotification] = useDeleteNotificationMutation()
  const { currentUser } = useGetCurrentUser()
  const [updateToRead] = useUpdateNotificationToReadMutation()
  return (
    <>
      <ActionMenuItem onClick={() => updateToRead({ notificationType, id, userId: currentUser.userId })}>
        <ReadSvg />
        <span>
          Mark As Read
        </span>
      </ActionMenuItem>
      <ActionMenuItem onClick={() => deleteNotification({ notificationType, id, userId: currentUser.userId })}>
        <DeleteSvg />
        <span>
          Delete Notification
        </span>
      </ActionMenuItem>

    </>
  )
}

export default NotificationsItemSet
