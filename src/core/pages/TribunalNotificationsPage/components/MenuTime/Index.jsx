import React, { useState } from 'react'
import {
  VerticalMenuDotsSvg, DeleteSvg, ReadSvg,
} from '../../../../../svgs/svgs'
import { useUpdateNotificationToReadMutation, useDeleteNotificationMutation } from '../../../../../api/services/notifications.ts'
import {
  MenuTimeContainer, Time, MenuIconContainer, ActionMenu, ActionMenuItem,
} from './Style/index'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

export function MenuTime({ time, id, eventType }) {
  const [isOpen, setIsOpen] = useState(false)
  const [updateNotificationToRead] = useUpdateNotificationToReadMutation()
  const [deleteNotification] = useDeleteNotificationMutation()
  const { currentUser } = useGetCurrentUser()
  return (
    <MenuTimeContainer>
      <MenuIconContainer onClick={(e) => {
        e.stopPropagation()
        setIsOpen((prev) => !prev)
        const eventListener = () => {
          setIsOpen((prev) => !prev)
          document.getElementById('notifications-container').removeEventListener('click', eventListener)
        }

        document.getElementById('notifications-container').addEventListener('click', eventListener)
      }}
      >
        <VerticalMenuDotsSvg />
        <ActionMenu isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
          <ActionMenuItem onClick={() => updateNotificationToRead({ notificationType: eventType, id, userId: currentUser.userId })}>
            <ReadSvg />
            <span>
              Mark As Read
            </span>
          </ActionMenuItem>
          <ActionMenuItem onClick={() => deleteNotification({ notificationType: eventType, id, userId: currentUser.userId })}>
            <DeleteSvg />
            <span>
              Delete Notification
            </span>
          </ActionMenuItem>
        </ActionMenu>
      </MenuIconContainer>
      <Time>{time}</Time>
    </MenuTimeContainer>
  )
}
