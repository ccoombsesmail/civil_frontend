import React from 'react'

import {
  UsernameContainer, ListItem, List, UserBio, FlexDiv, UserIcon,
} from './Style'

const UserList = ({ users }) => (
  <List>
    {
        users.map((user) => (
          <ListItem key={user.userId}>
            <UserIcon src={user.iconSrc} />
            <FlexDiv>
              <UsernameContainer>
                <span>{user.username}</span>
                <span>{user.email}</span>
              </UsernameContainer>
              <UserBio>{user.bio}</UserBio>
            </FlexDiv>
          </ListItem>
        ))
      }
  </List>

)

export default UserList
