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
import { userJoinedDate } from '../../../generic/time/userJoinedDate'
import { LightButton } from '../../CommonComponents/Tooltip/Style'
import { AuthenticationSvg } from '../../../svgs/svgs'
import useGetUserGatewayTokensEffect from '../../hooks/permissions/useGetUserGatewayTokensEffect'

function RobotIcon() {
  return (
    <img src="https://civic.me/static/media/bot_icon.f8d363e6d1ab7990da7126f8fa6a67ab.svg" alt="" />
  )
}

function UserProfile() {
  const { userId: profileUserId } = useParams()
  const [activeIndex, setActiveIndex] = useState(0)
  const { CAPTCHA_PASS_ACTIVE, UNQIUENESS_PASS_ACTIVE } = useGetUserGatewayTokensEffect(profileUserId)

  const { currentUser, isLoading: isCurrentUserLoading, isUninitialized: isCurrentUserUninitialized } = useGetCurrentUser()
  const {
    data: user, isLoading, isUninitialized, isFetching,
  } = useGetUserQuery(profileUserId, {
    skip: !profileUserId,
  })

  if (isUninitialized) return null
  if (isLoading) return <CircleLoading size="20vw" />

  const isCurrentUserProfile = profileUserId === currentUser?.userId

  return (
    <Container>
      <Banner src="https://cdn.discordapp.com/attachments/1048453486456619088/1065232803744202812/C00mbsie_create_a_background_image_of_a_field_with_a_19th_centu_74420bf5-1e90-44e6-9064-b5c6c5574098.png" alt="" />
      <HeaderContainer>
        <TabsIconContainer>
          <UserIcon src={user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'} />
          <FlexDiv>
            <div className="flex-column">
              <UsernameAndTag
                usernameDisplay={user?.username}
                userId={profileUserId}
                userTag={user?.tag}
              />
              <span className="text-sm text-color-secondary">
                {userJoinedDate(user.createdAt)}
              </span>
              <div className="flex">
                <LightButton className="mr-2" variant="light" bgcolor={CAPTCHA_PASS_ACTIVE ? 'var(--m-civic-theme-main-color)' : 'lightgray'}>
                  <RobotIcon />
                </LightButton>
                <LightButton variant="light" bgcolor={UNQIUENESS_PASS_ACTIVE ? 'var(--m-civic-theme-main-color)' : 'lightgray'}>
                  <AuthenticationSvg />
                </LightButton>

              </div>
            </div>
            <Bio>{user?.bio}</Bio>
          </FlexDiv>
          { isCurrentUserProfile || !currentUser ? null : <FollowButton isUserLoading={isLoading} isUserFetching={isFetching} user={user} profileUserId={profileUserId} /> }
          <FullWidthDiv />
        </TabsIconContainer>

      </HeaderContainer>
      <Content>
        <Middle>
          <TabView className="w-full" onTabChange={(e) => setActiveIndex(e.index)} activeIndex={activeIndex}>
            <TabPanel header="Posts">
              <UserPosts usernameDisplay={user?.username} profileUserId={profileUserId} user={currentUser} />
            </TabPanel>
            <TabPanel header="Following">
              <UserList
                useQueryHook={useGetAllFollowedQuery}
                listTitle="Following"
                isCurrentUserProfile={isCurrentUserProfile}
                profileUserId={profileUserId}
              />
            </TabPanel>
            <TabPanel header="Followers">
              <UserList
                useQueryHook={useGetAllFollowersQuery}
                listTitle="Followers"
                profileUserId={profileUserId}
                isCurrentUserProfile={isCurrentUserProfile}
              />
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
