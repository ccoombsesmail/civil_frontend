import React from 'react'
import { UserDetailsContainer, UserDetailsRow, UserDetailsRowItem } from './Style/Index'
import { useGetUserQuery } from '../../../../api/services/users.ts'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import { LightButton } from '../../../CommonComponents/Tooltip/Style'
import { AuthenticationSvg } from '../../../../svgs/svgs'
import { longUsernameDisplay } from '../../../../generic/string/longUsernameDisplay'
import { userJoinedDate } from '../../../../generic/time/userJoinedDate'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'

function RobotIcon() {
  return (
    <img src="https://civic.me/static/media/bot_icon.f8d363e6d1ab7990da7126f8fa6a67ab.svg" alt="" />
  )
}

function Stat({
  primeIcon, icon, title, value,
}) {
  return (
    <>
      <div>
        {primeIcon && <i className={`pi ${primeIcon} text-lg text-primary`} />}
        {icon}

        <span className="text-sm ml-2 text-primary">
          {' '}
          {title}
          {' '}
        </span>
      </div>
      <span className="text-lg">
        {value}
      </span>

    </>
  )
}

export default function ReportedUserDetails({ reportedUserId }) {
  const { currentUser} = useGetCurrentUser()
  const {
    data: user, isLoading, isUninitialized,
  } = useGetUserQuery(reportedUserId, {
    skip: !currentUser || !reportedUserId,
  })

  const { captchaPassActive, faceIdPassActive } = user?.permissions || {}
  return (
    <UserDetailsContainer>
      <header className="flex p-3 align-items-center justify-content-center text-primary bg-white w-full">
        {/* <span className="pi pi-user mr-2" /> */}
        <span className="font-bold text-xl">Reported User Details</span>
      </header>
      { isLoading || isUninitialized ? <CircleLoading size={20} /> : (
        <>
          <UserDetailsRow>
            <UserDetailsRowItem>
              <Stat primeIcon="pi-user" title="Username" value={longUsernameDisplay(user.username)} />
            </UserDetailsRowItem>
            <UserDetailsRowItem>
              <Stat
                primeIcon="pi-lock"
                title="Verification"
                value={(
                  <div className="flex">
                    <LightButton className="mr-2" variant="light" bgcolor={captchaPassActive ? 'var(--primary-color)' : 'lightgray'}>
                      <RobotIcon />
                    </LightButton>
                    <LightButton variant="light" bgcolor={faceIdPassActive ? 'var(--primary-color)' : 'lightgray'}>
                      <AuthenticationSvg />
                    </LightButton>

                  </div>
              )}
              />
            </UserDetailsRowItem>
            <UserDetailsRowItem>
              <Stat primeIcon="pi-users" title="Followers" value={user.numFollowers} />
            </UserDetailsRowItem>
          </UserDetailsRow>
          <UserDetailsRow>
            <UserDetailsRowItem>
              <Stat primeIcon="pi-comments" title="Posts" value={user.numPosts} />
            </UserDetailsRowItem>
            <UserDetailsRowItem>
              <Stat primeIcon="pi-chart-line" title="Level" value={user.userLevelData?.level} />
            </UserDetailsRowItem>
            <UserDetailsRowItem>
              <Stat primeIcon="pi-clock" title="Joined" value={userJoinedDate(user.createdAt, false)} />
            </UserDetailsRowItem>
          </UserDetailsRow>
          <UserDetailsRow>
            <UserDetailsRowItem>
              <Stat primeIcon="pi-hashtag" title="Tag" value={user.tag} />
            </UserDetailsRowItem>
            <UserDetailsRowItem>
              <Stat primeIcon="pi-id-card" title="ID" value={longUsernameDisplay(user.userId)} />
            </UserDetailsRowItem>
          </UserDetailsRow>

        </>
      )}
    </UserDetailsContainer>
  )
}
