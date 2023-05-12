import React, { memo } from 'react'
import useGetLinkMetaDataEffect from '../../../Forms/components/LinkMetaData/hooks/useGetLinkMetaDataEffect'
import useNavigateToPage from './hooks/useNavigateToPage'

import {
  Container, Thumb, DescriptionContainer, Title, SubTitle, OGImage,
} from './Style/index'

function RecItem({ rec }) {
  let content = null
  const { space, discussion } = rec
  const metaData = useGetLinkMetaDataEffect({ externalContentUrl: rec.externalRecommendedContent })
  const navigateToPage = useNavigateToPage(rec)
  if (space) {
    if (space?.ytUrl) {
      const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
      const match = space.ytUrl.match(regExp)
      if (match && match[2].length === 11) {
        content = <img src={`http://img.youtube.com/vi/${match[2]}/sddefault.jpg`} alt="No Thumb" />
      }
    } else if (!space?.ytUrl && space?.externalContentUrl) {
      content = <img src={space.thumbImgUrl} alt="No Thumb" />
    }
  } else {
    // content = <img src="./image.png" alt="No Thumb" />
  }

  return (
    <Container onClick={navigateToPage}>
      <Thumb>
        {content}
        {metaData && <OGImage src={metaData.ogImage?.url} alt="" />}
      </Thumb>
      <DescriptionContainer>
        <Title>
          { rec.space ? rec.space.title : rec.subSpace?.title}
          {metaData && metaData.ogTitle}
        </Title>
        {/* <Line /> */}
        <SubTitle>
          { rec.space?.createdByUsername || rec.subSpace?.createdByUsername}
          {metaData && metaData?.ogDescription}
        </SubTitle>
      </DescriptionContainer>
    </Container>
  )
}

export default memo(RecItem)
