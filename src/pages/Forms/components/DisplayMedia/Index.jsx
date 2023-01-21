import React from 'react'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'
import LinkMetaData from '../LinkMetaData/Index'

const DisplayMedia = ({
  imgFile, videoFile, externalContentUrl, metaData,
}) => (
  <>
    { metaData ? (
      <LinkMetaData
        externalContentUrl={externalContentUrl}
        metaData={metaData}
      />
    ) : <CircleLoading size={30} />}
    { imgFile && <img src={imgFile} alt="" />}
    { videoFile && (
      <video controls>
        <track
          default
          kind="captions"
          srcLang="en"
        />
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </>

)

export default DisplayMedia
