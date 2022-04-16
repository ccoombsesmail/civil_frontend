import React from 'react'
import { Line } from '../../../CommonComponents/Line'
import useGetLinkMetaDataEffect from '../../../TopicForm/components/LinkMetaData/hooks/useGetLinkMetaDataEffect'
import useNavigateToPage from './hooks/useNavigateToPage'

import {
  Container, Thumb, DescriptionContainer, Title, SubTitle, OGImage, OGTitle, OGDescription, OGUrl
} from './Style/index'

const RecItem = ({ rec }) => {
  let content = null
  const { topic, subTopic } = rec

  const metaData = useGetLinkMetaDataEffect({ contentUrl: rec.externalRecommendedContent })
  const navigateToPage = useNavigateToPage(rec)
  if (topic) {
    if (topic?.ytUrl) {
      const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
      const match = topic.ytUrl.match(regExp)
      if (match && match[2].length === 11) {
        content = <img src={`http://img.youtube.com/vi/${match[2]}/sddefault.jpg`} alt="No Thumb" />
      }
    } else if (!topic?.ytUrl && topic?.contentUrl) {
      content = <img src={topic.thumbImgUrl} alt="No Thumb" />
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
          { rec.topic ? rec.topic.title : rec.subTopic?.title}
          {metaData && metaData.ogTitle}
        </Title>
        {/* <Line /> */}
        <SubTitle>
          { rec.topic?.createdBy || rec.subTopic?.createdBy}
          {metaData && metaData?.ogDescription}
        </SubTitle>
      </DescriptionContainer>
    </Container>
  )
}

export default RecItem
