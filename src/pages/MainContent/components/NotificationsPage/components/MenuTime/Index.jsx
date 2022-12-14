import React, { useState } from 'react'
import {
  VerticalMenuDotsSvg, DeleteSvg, ReadSvg,
} from '../../../../../../svgs/svgs'
import notificationActionCreators from '../../../../../../redux/actions/notifications/index'
import useBindDispatch from '../../../../../hooks/redux/useBindDispatch'
import {
  MenuTimeContainer, Time, MenuIconContainer, ActionMenu, ActionMenuItem,
} from './Style/index'
import { useUpdateNotificationToReadMutation } from '../../../../../../api/services/notifications'

export const MenuTime = ({ time, id, eventType: notificationType }) => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    updateNotificationToRead,
    deleteNotification,
  } = useBindDispatch(notificationActionCreators)

  const [updateToRead, {}] = useUpdateNotificationToReadMutation()
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
          <ActionMenuItem onClick={() => updateToRead({notificationType, id})}>
            <ReadSvg />
            <span>
              Mark As Read
            </span>
          </ActionMenuItem>
          <ActionMenuItem onClick={() => deleteNotification(eventType, id)}>
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
