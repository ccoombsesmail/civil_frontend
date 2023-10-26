// import {
//   SignedIn, SignedOut,
// } from '@clerk/clerk-react'
import React, { useMemo } from 'react'

// import useGoToAuthPage from '../hooks/routing/useGoToAuthPage'
import {
  Container, Icon,
} from './Style'
import { longUsernameDisplay } from '../../../generic/string/longUsernameDisplay'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'

function ProfilePopup({ userData }) {
  const {
    createdByIconSrc: iconSrc,
    createdByUsername: username,
    createdByUserId: userId,
    createdByTag: userTag,
    numPosts,
    numFollowers,
    civilityPoints,
    createdByExperience

  } = userData
  
  console.log(userData)
  // const user = useMemo(() => {
  //   if (!userData) {
  //     return {
  //       username: '',
  //       tag: '',
  //       numFollowers: '-',
  //       numFollowed: '-',
  //       numPosts: '-',
  //       iconSrc: 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png',
  //     }
  //   }
  //   return userData
  // }, [userData])

  return (
    <Container className="scalein animation-duration-500 w-22rem">
      
      <Icon className="mr-3" src={iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'} alt="" />
      <div className='w-full flex justify-content-start h-6rem mt-6'>
        <div className='flex flex-column ml-3 align-items-start'>
          <h1 className="text-2xl" >
            {longUsernameDisplay(username)}
          </h1>
          <h2 className="text-lg -mt-2">{userTag ? `@${userTag}` : ''}</h2>

        </div>

      </div>
      <p>
        {createdByExperience}
      </p>
      <div className="social">
        <h3 className="text-xl">
          {numFollowers}
          <small>followers</small>
        </h3>
        <h3 className="text-xl">
          {civilityPoints}
          <small>Civility</small>
        </h3>
        {/* <h3 className="text-xl">
          {numPosts}
          <small>posts</small>
        </h3> */}
      </div>
  
    </Container>
  )
}
export default ProfilePopup
