/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import UserItem from './components/UserItem/Index'
import { getTimeSince } from '../../../../generic/string/dateFormatter'

import {
  ListItem, List,
} from './Style'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'

const UserList = ({ users, isLoading, isUninitialized }) => {
  if (isUninitialized) return null
  if (isLoading) return <CircleLoading size="30vw" />
  return (
    <List>
      {
        users.length ? users.map((user) => (
          <ListItem key={user.userId}>
            <UserItem {...user} time={getTimeSince(user.createdAt)} />
          </ListItem>
        )) : <h1>Nothing here...</h1>
      }
    </List>

  )
}
export default UserList
