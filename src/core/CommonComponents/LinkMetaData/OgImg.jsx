/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react'

import { useGetLinkMetaDataMutation } from '../../../api/services/links.ts'
import { CircleLoading } from '../../../svgs/spinners/CircleLoading'
import { OGImage } from '../../Forms/components/LinkMetaData/Style/index'

function OgImg({
  url, setLinkMetadata, className, rawImage,
}) {
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
    <>
      { rawImage
        ? <img className={className} src={metaData?.ogImage?.url || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/Wavy-C_Bus-02_Single-11.jpg'} alt="" />
        : <OGImage className={className} src={metaData?.ogImage?.url || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/Wavy-C_Bus-02_Single-11.jpg'} alt="" />
      }
    </>

  )
}
export default OgImg
