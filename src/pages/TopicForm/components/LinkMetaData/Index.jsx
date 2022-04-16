import React, { useEffect } from 'react'

import {
  FlexDiv, OGUrl, OGTitle, OGDescription, OGImage, LinkWrapper, Container
} from './Style/index'
import { Line } from '../../../CommonComponents/Line/index'
import IsLoadingHOC from '../../../../hocs/IsLoadingHOC'
import useGetLinkMetaDataEffect from './hooks/useGetLinkMetaDataEffect'

const LinkMetaData = ({
  topic, contentUrl, setMetaData, setIsLoading,
}) => {
  const metaData = useGetLinkMetaDataEffect(topic, contentUrl, setMetaData, setIsLoading)
  useEffect(() => {
    setIsLoading(true)
  }, [contentUrl])

  return (
    <Container>
      { metaData
        ? (
          <LinkWrapper href={metaData.ogUrl} target="_blank">
            <FlexDiv>
              <OGTitle>{metaData.ogTitle || metaData.ogSiteName}</OGTitle>
              <OGUrl>{metaData.ogUrl}</OGUrl>
              <OGImage src={metaData.ogImage?.url || metaData.favicon} alt="" />
              <Line />
              <OGDescription>{metaData.ogDescription}</OGDescription>
            </FlexDiv>
          </LinkWrapper>
        ) : <a rel="noreferrer" href={metaData?.requestUrl} target="_blank">{metaData?.requestUrl}</a>}
    </Container>
  )
}
export default IsLoadingHOC(LinkMetaData)
