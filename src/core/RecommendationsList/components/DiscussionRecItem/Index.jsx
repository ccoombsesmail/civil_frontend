import React, { memo } from 'react'
import { Card } from 'primereact/card'
import { Avatar } from 'primereact/avatar'
import { useNavigate } from 'react-router-dom'
import UsernameAndTag from '../../../CommonComponents/UsernameAndTag/Index'
import { YouTube } from '../../../../enums/link_type'

import { getTimeSince } from '../../../../generic/string/dateFormatter'

function DiscussionRecItem({ rec }) {
  let content = null

  const navigate = useNavigate()
  if (rec.externalContentData.linkType === YouTube) {
    content = (
      <img
        src={`https://img.youtube.com/vi/${rec.externalContentData.embedId}/maxresdefault.jpg`}
        alt="Empty"
        className="border-round-md rec-item-thumbnail"
      />
    )
  }

  const subTitle = (
    <div className="flex justify-content-between">
      <div className="flex gap-2">
        <Avatar shape="circle" image={rec.createdByIconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'} />
        <UsernameAndTag
          usernameDisplay={rec.createdByUsername}
          userId={rec.createdByUserId}
          userTag={rec.createdByTag}
        />
      </div>

      <span className="ml-3">
        {`${getTimeSince(rec.createdAt)} ago ·`}
      </span>
    </div>
  )
  return (
    <Card
      onClick={() => navigate(`/home/spaces/${rec.spaceId}/discussions/${rec.id}`)}
      className="w-full p-0 m-0 flex flex-row hover:surface-300 cursor-pointer"
      pt={{
        content: { className: 'flex flex-column p-2 align-items-center border-bottom-1 border-100' },
        body: {className: 'p-0 mt-2'},
      }}
    >
      {content}
      <div>
        <p className="ml-2 mb-0 font-bold">
          {`${rec.title.substring(0, 100)}...`}
        </p>
        {subTitle}
      </div>
    </Card>

  // <Container onClick={navigateToPage}>
  //   <Thumb>
  //     {/* {content} */}
  //     {
  //       <img alt="" src={rec.createdByIconSrc} style={{height: '30px'}} />
  //     }
  //     {metaData && <OGImage src={metaData.ogImage?.url} alt="" />}
  //   </Thumb>
  //   <DescriptionContainer>
  //     <Title>
  //       { rec.space ? rec.space.title : rec.subSpace?.title}
  //       {metaData && metaData.ogTitle}
  //       {rec.title}
  //     </Title>
  //     {/* <Line /> */}
  //     <SubTitle>
  //       {rec.description}
  //       {/* { rec.space?.createdByUsername || rec.subSpace?.createdByUsername}
  //       {metaData && metaData?.ogDescription} */}
  //     </SubTitle>
  //   </DescriptionContainer>
  // </Container>
  )
}

export default memo(DiscussionRecItem)
