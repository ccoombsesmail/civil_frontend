import React from 'react'

import UserItem from './components/UserItem/Index'
import { getTimeSince } from '../../../../generic/string/dateFormatter';

import {
  UsernameContainer, ListItem, List, UserBio, FlexDiv, UserIcon,
} from './Style'

const UserList = ({ users }) => (
  <List>
    {
        users.map((user) => (
          <ListItem key={user.userId}>
            <UserItem {...user} time={getTimeSince(user.createdAt)} />
          </ListItem>
        ))
      }
  </List>

)

export default UserList
