/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import UserItem from './components/UserItem/Index'
import { getTimeSince } from '../../../../generic/string/dateFormatter'

import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'
import { Table, ColHeader, ColItem } from '../../../CommonComponents/AppTable/Style'

function UserList({ users, isLoading, isUninitialized, listTitle }) {
  if (isUninitialized) return null
  if (isLoading) return <CircleLoading size="30vw" />
  return (
    <Table>
      <thead>
        <ColHeader gridTemplateCols="1fr">
          <ColItem>
            {listTitle}
          </ColItem>
        </ColHeader>
      </thead>
      {
        users?.length ? users.map((user) => (
          <UserItem {...user} time={getTimeSince(user.createdAt)} />
        )) : <h1>Nothing here...</h1>
      }
    </Table>
  )
}
export default UserList
