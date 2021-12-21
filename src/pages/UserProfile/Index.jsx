import React, { useState } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import {
  Banner, Container, Header, Content, StyledNav, UserIcon,
} from './Style/index'

const UserProfile = () => {
  const user = useSelector((s) => s.session.currentUser)
  const [activeKey, setActiveKey] = useState('0')
  return (
    <Container>
      <Banner src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/default_banner.jpg" alt="" />
      <Tab.Container id="left-tabs-example" defaultActiveKey="1" onSelect={(key) => setActiveKey(key)}>
        <Header>
          <UserIcon src={user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png'} />
          <StyledNav activeKey={Number(activeKey)}>
            <div className="line" />
            <Nav.Item>
              <Nav.Link eventKey="0">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="1">Tab 2</Nav.Link>
            </Nav.Item>
          </StyledNav>
        </Header>
        <Content>
          <Tab.Content>
            <Tab.Pane eventKey="0">
              <div>first</div>
            </Tab.Pane>
            <Tab.Pane eventKey="1">
              <div>second</div>
            </Tab.Pane>
          </Tab.Content>
        </Content>
      </Tab.Container>
    </Container>
  )
}

export default UserProfile
