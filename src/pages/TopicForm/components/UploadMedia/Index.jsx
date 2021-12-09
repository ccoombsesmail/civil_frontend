import React from 'react'

import { Field } from 'formik'

import UploadFileInput from '../UploadImageInput/Index'
import { DownArrowCircleSvg } from '../../../../svgs/svgs'

import useOnFileChangeHandler from '../../hooks/useOnFileChangeHandler'

import { Container } from './Style/index'

const UploadMediaContainer = ({
  setFieldValue, imgFile, videoFile, setImgFile, setVideoFile,
}) => {
  const onFileChange = useOnFileChangeHandler()
  return (
    <Container>
      <Field
        fileType="file"
        name="topicImage"
        disabled={Boolean(videoFile)}
        file={imgFile}
        component={UploadFileInput}
        onChange={(e) => onFileChange(e, setFieldValue, setImgFile)}
        icon={<DownArrowCircleSvg />}
      />
      <Field
        fileType="file"
        name="topicVideo"
        disabled={Boolean(imgFile)}
        file={videoFile}
        component={UploadFileInput}
        onChange={(e) => onFileChange(e, setFieldValue, setVideoFile)}
        icon={<DownArrowCircleSvg />}
      />
    </Container>
  )
}

export default UploadMediaContainer
