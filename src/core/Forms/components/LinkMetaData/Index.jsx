import React, { useEffect } from 'react'

import {
  FlexDiv, OGUrl, OGTitle, OGDescription, OGImage, LinkWrapper, Container,
} from './Style/index'
import { Line } from '../../../CommonComponents/Line/index'
import { useGetLinkMetaDataMutation } from '../../../../api/services/links.ts'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'

function LinkMetaData({ url, setLinkMetadata }) {
  const [getMetaData, res, isLoading] = useGetLinkMetaDataMutation(url)

  useEffect(() => {
    getMetaData(url)
  }, [url])
  const metaData = res?.data

  if (metaData && typeof setLinkMetadata === 'function') {
    setLinkMetadata({
      url,
      ogImage: metaData.ogImage?.url,
    })
  }
  if (isLoading) return <CircleLoading />
  return (
    <Container>
      { metaData
        ? (
          <LinkWrapper href={metaData.ogUrl} target="_blank">
            <FlexDiv>
              <OGTitle>{metaData.ogTitle || metaData.ogSiteName}</OGTitle>
              <OGUrl>{metaData.ogUrl}</OGUrl>
              <OGImage src={metaData.ogImage?.url || metaData.favicon || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/Wavy-C_Bus-02_Single-11.jpg'} alt="" />
              <Line />
              <OGDescription>{metaData.ogDescription}</OGDescription>
            </FlexDiv>
          </LinkWrapper>
        ) : <a rel="noreferrer" href={metaData?.requestUrl} target="_blank">{metaData?.requestUrl}</a>}
    </Container>
  )
}
export default LinkMetaData
