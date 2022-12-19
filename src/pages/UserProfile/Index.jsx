import React, { useState, memo } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import {
  Banner, Container, HeaderContainer, Content, StyledNav, UserIcon, TabsIconContainer, Bio,
  Left, Middle, Right, Experience, ExperienceContainer, FlexDiv, FullWidthDiv
} from './Style/index'
import UserList from './components/UserList/Index'
import FollowButton from './components/FollowButton/Index'
import UsernameAndTag from '../CommonComponents/UsernameAndTag/Index'
import { useGetUserQuery } from '../../api/services/users.ts'
import { useGetAllFollowedQuery, useLazyGetAllFollowersQuery } from '../../api/services/follows.ts'

import useGetCurrentUser from '../App/hooks/useGetCurrentUser'
import { CircleLoading } from '../../svgs/spinners/CircleLoading'

const UserProfile = () => {
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
      <Banner src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/red-trees.jpg" alt="" />
      <Tab.Container defaultActiveKey="0" onSelect={(key) => setActiveKey(key)}>
        <HeaderContainer>
          <TabsIconContainer>
            <UserIcon src={user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png'} />
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
                <Nav.Link eventKey="2" onClick={() => getAllFollowers(user?.userId)}>Posts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3" onClick={() => getAllFollowers(user?.userId)}>About</Nav.Link>
              </Nav.Item>
            </StyledNav>
          </TabsIconContainer>

        </HeaderContainer>
        <Content>
          {/* <Left>
            <ExperienceContainer>
              <h1>Experience</h1>
              <Experience>
                {user?.experience}
              </Experience>
            </ExperienceContainer>
          </Left> */}
          <Middle>
            <Tab.Content>
              <Tab.Pane eventKey="0">
                <UserList
                  users={followed}
                  isLoading={isFollowedLoading}
                  isUninitialized={isFollowedUninitialized}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="1">
                <UserList
                  users={followers}
                  isLoading={isFollowersLoading}
                  isUninitialized={isFollowersUninitialized}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <ExperienceContainer>
                  <h1>Experience</h1>
                  <Experience>
                    {user?.experience}
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
