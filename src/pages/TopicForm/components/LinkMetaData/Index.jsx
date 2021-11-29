import React from 'react'

import {
  FlexDiv, OGUrl, OGTitle, OGDescription, OGImage, LinkWrapper,
} from './Style/index'
import { Line } from '../../../CommonComponents/Line/index'

const LinkMetaData = ({ metaData }) => (
  <>
    { metaData.success
      ? (
        <LinkWrapper href={metaData.ogUrl} target="_blank">
          <FlexDiv>
            <OGTitle>{metaData.ogTitle}</OGTitle>
            <OGUrl>{metaData.ogUrl}</OGUrl>
            <OGImage src={metaData.ogImage?.url} alt="" />
            <Line />
            <OGDescription>{metaData.ogDescription}</OGDescription>
          </FlexDiv>
        </LinkWrapper>
      ) : <a rel="noreferrer" href={metaData.requestUrl} target="_blank">{metaData.requestUrl}</a>}
  </>

)

export default LinkMetaData
