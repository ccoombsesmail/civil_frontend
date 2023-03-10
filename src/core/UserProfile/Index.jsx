/* eslint-disable max-len */
import React, { useState, memo } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import {
  Banner, Container, HeaderContainer, Content, StyledNav, UserIcon, TabsIconContainer, Bio,
  Middle, Experience, ExperienceContainer, FlexDiv, FullWidthDiv,
} from './Style/index'
import UserList from './components/UserList/Index'
import FollowButton from './components/FollowButton/Index'
import UsernameAndTag from '../CommonComponents/UsernameAndTag/Index'
import { useGetUserQuery } from '../../api/services/users.ts'
import { useGetAllFollowedQuery, useLazyGetAllFollowersQuery } from '../../api/services/follows.ts'

import useGetCurrentUser from '../App/hooks/useGetCurrentUser'
import { CircleLoading } from '../../svgs/spinners/CircleLoading'
import UserPosts from './components/UserPosts/Index'
import ProgressBar from '../CommonComponents/ProgressBar2/Index'

function UserProfile() {
  const { userId: profileUserId } = useParams()
  const [activeKey, setActiveKey] = useState('0')

  const { currentUser, isLoading: isCurrentUserLoading, isUninitialized: isCurrentUserUninitialized } = useGetCurrentUser()
  const { data: user, isLoading, isUninitialized } = useGetUserQuery(profileUserId, {
    skip: !currentUser || !profileUserId,
  })

  const { data: followed, isLoading: isFollowedLoading, isUninitialized: isFollowedUninitialized } = useGetAllFollowedQuery(user?.userId, {
    skip: !currentUser || !user,
  })
  const [getAllFollowers, { data: followers, isLoading: isFollowersLoading, isUninitialized: isFollowersUninitialized }] = useLazyGetAllFollowersQuery()

  if (isCurrentUserUninitialized || isUninitialized) return null
  if (isCurrentUserLoading || isLoading) return <CircleLoading size="20vw" />

  const showFollowButton = profileUserId !== currentUser.userId

  return (
    <Container>
      <Banner src="https://cdn.discordapp.com/attachments/1048453486456619088/1065232803744202812/C00mbsie_create_a_background_image_of_a_field_with_a_19th_centu_74420bf5-1e90-44e6-9064-b5c6c5574098.png" alt="" />
      <Tab.Container defaultActiveKey="0" onSelect={(key) => setActiveKey(key)}>
        <HeaderContainer>
          <TabsIconContainer>
            <UserIcon src={user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'} />
            <FlexDiv>
              <UsernameAndTag
                usernameDisplay={user?.username}
                userId={profileUserId}
                userTag={user?.tag}
              />
              <Bio>{user?.bio}</Bio>
            </FlexDiv>
            <FullWidthDiv>
              { showFollowButton && <FollowButton isFollowing={user?.isFollowing} profileUserId={profileUserId} username={user?.username} /> }
            </FullWidthDiv>

            <StyledNav activeKey={Number(activeKey)}>
              <div className="line" />
              <Nav.Item>
                <Nav.Link eventKey="0">Following</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="1" onClick={() => getAllFollowers(user?.userId)}>Followers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Posts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">About</Nav.Link>
              </Nav.Item>
            </StyledNav>
          </TabsIconContainer>

        </HeaderContainer>
        <Content>
          <Middle>
            <Tab.Content>
              <Tab.Pane eventKey="0">
                <UserList
                  users={followed}
                  isLoading={isFollowedLoading}
                  isUninitialized={isFollowedUninitialized}
                  listTitle="Following"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="1">
                <UserList
                  users={followers}
                  isLoading={isFollowersLoading}
                  isUninitialized={isFollowersUninitialized}
                  listTitle="Followers"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <UserPosts profileUserId={profileUserId} user={currentUser} />
              </Tab.Pane>

              <Tab.Pane eventKey="3">
                <ExperienceContainer>
                  <h1>Experience</h1>
                  <Experience>
                    {user?.experience}
                    <ProgressBar userLevelData={user?.userLevelData} />
                  </Experience>
                </ExperienceContainer>
              </Tab.Pane>
            </Tab.Content>
          </Middle>
        </Content>
      </Tab.Container>
    </Container>
  )
}

export default memo(UserProfile)
