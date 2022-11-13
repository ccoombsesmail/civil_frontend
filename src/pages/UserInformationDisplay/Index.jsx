import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Icon } from './Style'

const UserInformationDisplay = () => {
  const user = useSelector((s) => s.session.currentUser)
  console.log(user)
  return (
    <Container>
      <Icon className="img" src={user?.iconSrc} alt="" />
      <h1>
        {user?.username}
        {/* <span>18</span> */}
      </h1>
      <h2>{`@${user?.tag}`}</h2>
      <div className="social">
        <h3>
          10k
          <small>followers</small>
        </h3>
        <h3>
          15k
          <small>likes</small>
        </h3>
        <h3>
          110
          <small>photos</small>
        </h3>
      </div>
      <div className="center">
        <div className="heart" />
      </div>
    </Container>
  )
}
export default UserInformationDisplay
