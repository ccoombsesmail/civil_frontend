/* eslint-disable max-len */
import React, { memo, useState } from 'react'
import { useParams } from 'react-router-dom'

import { TabView, TabPanel } from 'primereact/tabview'
import {
  Banner, Container, HeaderContainer, Content, UserIcon, TabsIconContainer, Bio,
  Middle, Experience, ExperienceContainer, FlexDiv, FullWidthDiv,
} from './Style/index'
import UserList from './components/UserList/Index'
import FollowButton from './components/FollowButton/Index'
import UsernameAndTag from '../../CommonComponents/UsernameAndTag/Index'
import { useGetUserQuery } from '../../../api/services/users.ts'
import { useGetAllFollowedQuery, useGetAllFollowersQuery } from '../../../api/services/follows.ts'

import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'
import { CircleLoading } from '../../../svgs/spinners/CircleLoading'
import UserPosts from './components/UserPosts/Index'
import ProgressBar from '../../CommonComponents/ProgressBar2/Index'

function UserProfile() {
  const { userId: profileUserId } = useParams()
  const [activeIndex, setActiveIndex] = useState(0)

  const { currentUser, isLoading: isCurrentUserLoading, isUninitialized: isCurrentUserUninitialized } = useGetCurrentUser()
  const {
    data: user, isLoading, isUninitialized, isFetching,
  } = useGetUserQuery(profileUserId, {
    skip: !currentUser || !profileUserId,
  })

  const { data: followed, isLoading: isFollowedLoading, isUninitialized: isFollowedUninitialized } = useGetAllFollowedQuery(user?.userId, {
    skip: !currentUser || !user,
  })
  const { data: followers, isLoading: isFollowersLoading, isUninitialized: isFollowersUninitialized } = useGetAllFollowersQuery(user?.userId, {
    skip: !currentUser || activeIndex !== 1,
  })

  if (isCurrentUserUninitialized || isUninitialized) return null
  if (isCurrentUserLoading || isLoading) return <CircleLoading size="20vw" />

  const isCurrentUserProfile = profileUserId === currentUser.userId

  return (
    <Container>
      <Banner src="https://cdn.discordapp.com/attachments/1048453486456619088/1065232803744202812/C00mbsie_create_a_background_image_of_a_field_with_a_19th_centu_74420bf5-1e90-44e6-9064-b5c6c5574098.png" alt="" />
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
          { isCurrentUserProfile ? null : <FollowButton isUserLoading={isLoading} isUserFetching={isFetching} user={user} profileUserId={profileUserId} /> }
          <FullWidthDiv />
        </TabsIconContainer>

      </HeaderContainer>
      <Content>
        <Middle>
          <TabView className="w-full" onTabChange={(e) => setActiveIndex(e.index)} activeIndex={activeIndex}>
            <TabPanel header="Following">
              <UserList
                users={followed}
                isLoading={isFollowedLoading}
                isUninitialized={isFollowedUninitialized}
                listTitle="Following"
                isCurrentUserProfile={isCurrentUserProfile}
              />
            </TabPanel>
            <TabPanel header="Followers">
              <UserList
                users={followers}
                isLoading={isFollowersLoading}
                isUninitialized={isFollowersUninitialized}
                listTitle="Followers"
                isCurrentUserProfile={isCurrentUserProfile}
              />
            </TabPanel>
            <TabPanel header="Posts">
              <UserPosts profileUserId={profileUserId} user={currentUser} />
            </TabPanel>

            <TabPanel header="About">
              <ExperienceContainer>
                <h1>Experience</h1>
                <Experience>
                  {user?.experience}
                </Experience>
              </ExperienceContainer>
              <ProgressBar userLevelData={user?.userLevelData} />

            </TabPanel>
          </TabView>

        </Middle>
      </Content>
    </Container>
  )
}

export default memo(UserProfile)
