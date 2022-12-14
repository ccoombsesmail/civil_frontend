import React, { useEffect, useState, memo } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useBindDispatch from '../hooks/redux/useBindDispatch'
import userActions from '../../redux/actions/users/index'
import followActions from '../../redux/actions/follows/index'

import {
  Banner, Container, HeaderContainer, Content, StyledNav, UserIcon, TabsIconContainer, Bio,
  Left, Middle, Right, Experience, ExperienceContainer, FlexDiv,
} from './Style/index'
import UserList from './components/UserList/Index'
import FollowButton from './components/FollowButton/Index'
import UsernameAndTag from '../CommonComponents/UsernameAndTag/Index'
import { useGetCurrentUserQuery } from '../../api/services/session'

const UserProfile = () => {
  const { userId: profileUserId } = useParams()
  const user = useSelector((s) => s.users)[profileUserId]
  const { followed, followers } = useSelector((s) => s.follows)

  // const{ data: currentUser } = useGetCurrentUserQuery(profileUserId)

  const showFollowButton = profileUserId !== currentUser?.id
  const isFollowing = user?.isFollowing
  const { getUser, getAllFollowed, getAllFollowers } = useBindDispatch(userActions, followActions)

  useEffect(() => {
    if (currentUser) {
      // getUser(profileUserId, currentUser?.id)
      getAllFollowed(profileUserId)
    }
  }, [currentUser])
  const [activeKey, setActiveKey] = useState('0')
  return (
    <Container>
      <Banner src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/default_banner.jpg" alt="" />
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
            <StyledNav activeKey={Number(activeKey)}>
              <div className="line" />
              <Nav.Item>
                <Nav.Link eventKey="0">Following</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="1" onClick={() => getAllFollowers(profileUserId)}>Followers</Nav.Link>
              </Nav.Item>
            </StyledNav>
          </TabsIconContainer>
          { showFollowButton && <FollowButton isFollowing={isFollowing} profileUserId={profileUserId} /> }

        </HeaderContainer>
        <Content>
          <Left>
            <ExperienceContainer>
              <h1>Experience</h1>
              <Experience>
                {user?.experience}
              </Experience>
            </ExperienceContainer>
          </Left>
          <Middle>
            <Tab.Content>
              <Tab.Pane eventKey="0">
                <UserList
                  users={followed}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="1">
                <UserList
                  users={followers}
                />
              </Tab.Pane>
            </Tab.Content>
          </Middle>
          <Right />
        </Content>
      </Tab.Container>
    </Container>
  )
}

export default memo(UserProfile)
