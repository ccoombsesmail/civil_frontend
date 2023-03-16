import React, { useState } from 'react'
import {
  VerticalMenuDotsSvg,
} from '../../../svgs/svgs'
import {
  MenuTimeContainer, Time, MenuIconContainer, ActionMenu,
} from './Style/index'
import NotificationsItemSet from './ItemSets/NotificationsItemSet'
import FollowsItemSet from './ItemSets/FollowsItemSet'

function ItemMenu({
  menuType, time, id, userId, username, eventType: notificationType,
}) {
  const [isOpen, setIsOpen] = useState(false)
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
          { menuType === 'Follows' ? <FollowsItemSet userId={userId} username={username} /> : <NotificationsItemSet notificationType={notificationType} id={id} />}
        </ActionMenu>
      </MenuIconContainer>
      <Time>{time}</Time>
    </MenuTimeContainer>
  )
}

export default ItemMenu
