import React, { useMemo } from 'react'

import { DataScroller } from 'primereact/datascroller'
import { useGetAllNotificationsQueryState } from '../../../../../api/services/notifications.ts'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import NotificationItem from '../NotificationItem/Index'
import {
  BorderContainer, Header,
} from '../../Style'
import { ColHeader, ColItem } from '../../../../CommonComponents/AppTable/Style'

function NotificationList({ className }) {
  const { currentUser } = useGetCurrentUser()
  const { data: notifications } = useGetAllNotificationsQueryState(currentUser?.userId)
  const { tribunalNotifications } = notifications || {}
  const itemTemplate = (notification) => (
    <NotificationItem key={notification.id} notification={notification} />
  )

  const header = useMemo(() => (
    <header className="w-full">
      <ColHeader gridTemplateCols="1fr 3fr 1fr">
        <ColItem> From</ColItem>
        {/* <ColItem> Action</ColItem> */}
        <ColItem> Description </ColItem>
        <ColItem>  </ColItem>
      </ColHeader>
    </header>
  ), [])

  return (
    <BorderContainer className={className}>
      <Header>
        <h5 className="text-2xl">
          Notifications
        </h5>
      </Header>
      <DataScroller value={tribunalNotifications} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header={header} />

    </BorderContainer>
  )
}

export default NotificationList
