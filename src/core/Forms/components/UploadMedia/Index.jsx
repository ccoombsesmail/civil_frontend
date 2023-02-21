import React from 'react'

import { Field } from 'formik'

import UploadFileInput from '../UploadImageInput/Index'
import { VideoSvg, ImageSvg } from '../../../../svgs/svgs'

import useOnFileChangeHandler from '../../hooks/useOnFileChangeHandler'

import { Container } from './Style/index'

function UploadMediaContainer({
  setFieldValue, imgFile, videoFile, setImgFile, setVideoFile,
}) {
  const onFileChange = useOnFileChangeHandler()
  return (
    <Container>
      <Field
        fileType="file"
        accept="image/*"
        name="topicImage"
        disabled={Boolean(videoFile)}
        file={imgFile}
        component={UploadFileInput}
        onChange={(e) => onFileChange(e, setFieldValue, setImgFile)}
        icon={<ImageSvg />}
      />
      <Field
        fileType="file"
        name="topicVideo"
        disabled={Boolean(imgFile)}
        file={videoFile}
        component={UploadFileInput}
        onChange={(e) => onFileChange(e, setFieldValue, setVideoFile)}
        icon={<VideoSvg />}
      />
    </Container>
  )
}

export default UploadMediaContainer
