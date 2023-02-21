import React from 'react'
import { UploadImage, UploadVideo } from '../../TopicForm/Style'

function DisplayMedia({
  imgFile, videoFile,
}) {
  return (
    <>
      { imgFile ? <UploadImage src={imgFile} alt="content to upload" /> : null}
      { videoFile ? (
        <UploadVideo src={videoFile} alt="content to upload" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </UploadVideo>
      ) : null}
    </>
  )
}

export default DisplayMedia
