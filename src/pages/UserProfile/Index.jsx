import React, { useEffect, useState, memo } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useBindDispatch from '../hooks/redux/useBindDispatch'
import userActions from '../../redux/actions/users/index'
import followActions from '../../redux/actions/follows/index'

import {
  Banner, Container, HeaderContainer, Content, StyledNav, UserIcon, TabsIconContainer, Bio,
  Left, Middle, Right, Experience, ExperienceContainer,
} from './Style/index'
import UserList from './components/UserList/Index'
import FollowButton from './components/FollowButton/Index'

const UserProfile = () => {
  const { userId } = useParams()
  const user = useSelector((s) => s.users)[userId]
  const { followed, followers } = useSelector((s) => s.follows)

  const currentUser = useSelector((s) => s.session.currentUser)

  const showFollowButton = userId !== currentUser?.id
  const isFollowing = user?.isFollowing
  const { getUser, getAllFollowed, getAllFollowers } = useBindDispatch(userActions, followActions)

  useEffect(() => {
    if (currentUser) {
      getUser(userId, currentUser?.id)
      getAllFollowed(userId)
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
            <Bio>{user?.bio}</Bio>
            <StyledNav activeKey={Number(activeKey)}>
              <div className="line" />
              <Nav.Item>
                <Nav.Link eventKey="0">Following</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="1" onClick={() => getAllFollowers(userId)}>Followers</Nav.Link>
              </Nav.Item>
            </StyledNav>
          </TabsIconContainer>
          { showFollowButton && <FollowButton isFollowing={isFollowing} userId={userId} /> }

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
