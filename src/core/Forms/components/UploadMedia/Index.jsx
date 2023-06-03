import React from 'react'

import { Field } from 'formik'

import { Toolbar } from 'primereact/toolbar'
import UploadFileInput from '../UploadImageInput/Index'
import { VideoSvg, ImageSvg } from '../../../../svgs/svgs'

import useOnFileChangeHandler from '../../hooks/useOnFileChangeHandler'

function UploadMediaContainer({
  setFieldValue, imgFile, videoFile, setImgFile, setVideoFile,
}) {
  const onFileChange = useOnFileChangeHandler()

  const startContent = (
    <>
      <Field
        fileType="file"
        accept="image/*"
        name="spaceImage"
        disabled={Boolean(videoFile)}
        file={imgFile}
        component={UploadFileInput}
        onChange={(e) => onFileChange(e, setFieldValue, setImgFile)}
        icon={<ImageSvg />}
        className="mr-2"
      />
      <Field
        fileType="file"
        name="spaceVideo"
        disabled={Boolean(imgFile)}
        file={videoFile}
        component={UploadFileInput}
        onChange={(e) => onFileChange(e, setFieldValue, setVideoFile)}
        icon={<VideoSvg />}
        className="mr-2"
      />
    </>
  )
  return (
    <Toolbar start={startContent} endContent={<>sdf</>} className="w-5" />
  )
}

export default UploadMediaContainer
