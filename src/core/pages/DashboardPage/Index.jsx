import React, { useEffect, Suspense } from 'react'

import { TabPanel, TabView } from 'primereact/tabview'
import { Container, CivicPassesContainer } from './Style'

import Header from './components/Header/Index'
import { Line } from '../../CommonComponents/Line'

import BioForm from './components/BioForm/Index'
import { CaptchaGatewayDesktop } from '../../../civic/components/CaptchGateway/CaptchaGateway'
import { UniquenessStatus } from '../../../civic/components/UniquenessGateway/UniquenessGateway'

import UserPosts from '../UserProfile/components/UserPosts/Index'
import ProgressBar from '../../CommonComponents/ProgressBar2/Index'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'
import SavedContent from './components/SavedContent/SavedContent'
import { useGetAllFollowedQuery, useGetAllFollowersQuery } from '../../../api/services/follows.ts'
import UserList from '../UserProfile/components/UserList/Index'
import GetFaceVerified from '../../CommonComponents/GetFaceVerified/GetFaceVerified'

function Dashboard() {
  const { currentUser } = useGetCurrentUser()

  useEffect(() => {
    const clerkWrapper = document.getElementsByClassName('cl-main')[0]
    if (clerkWrapper) clerkWrapper.insertBefore(document.getElementById('bio-dashboard'), null)
  }, [])

  if (!currentUser) return null

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Header />
        <Line />
        <TabView
          activeIndex={0}
          className=" w-full lg:w-10"
          pt={{
            nav: {
              className: 'flex justify-content-center',
            },
          }}
        >
          <TabPanel pt={{
            header: {
              className: 'tab-panel-user-profile-information'
            }
          }}  header="Profile Information">
            <div className="flex flex-column w-full lg:flex-row justify-content-center align-items-center mt-3">
              <ProgressBar userLevelData={currentUser?.userLevelData} />
              <CivicPassesContainer>
                <b>Civic Passes</b>
                <CaptchaGatewayDesktop />
                <UniquenessStatus />
                <GetFaceVerified />
              </CivicPassesContainer>
            </div>
            <Line />
            <BioForm />

          </TabPanel>
          <TabPanel header="Your Posts">
            <UserPosts isCurrentUser usernameDisplay={currentUser?.username} profileUserId={currentUser.userId} user={currentUser} />
          </TabPanel>

          <TabPanel header="Saved">
            <SavedContent />
          </TabPanel>

          <TabPanel header="Following">
            <UserList
              profileUserId={currentUser?.userId}
              useQueryHook={useGetAllFollowedQuery}
              listTitle="Following"
              isCurrentUserProfile
            />
          </TabPanel>
          <TabPanel header="Followers">
            <UserList
              profileUserId={currentUser?.userId}
              useQueryHook={useGetAllFollowersQuery}
              listTitle="Followers"
              isCurrentUserProfile
            />
          </TabPanel>
        </TabView>

      </Container>
    </Suspense>
  )
}

export default Dashboard
