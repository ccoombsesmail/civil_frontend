import React from 'react'
import LinkMetaData from '../LinkMetaData/Index'

const DisplayMedia = ({
  imgFile, videoFile, setMetaData, contentUrl,
}) => (
  <>
    { contentUrl && (
    <LinkMetaData
      setMetaData={setMetaData}
      contentUrl={contentUrl}
    />
    ) }
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
