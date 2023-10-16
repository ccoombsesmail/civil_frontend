import React, { useRef, useState } from 'react'
import { Toast } from 'primereact/toast'
import { FileUpload } from 'primereact/fileupload'
import { ProgressBar } from 'primereact/progressbar'
import { Button } from 'primereact/button'
import { Tooltip } from 'primereact/tooltip'
import { Tag } from 'primereact/tag'
import { Avatar } from 'primereact/avatar'
import { ProgressSpinner } from 'primereact/progressspinner'
import { useWindowSize } from '../../hooks/responsive/useGetWindowSize'
import { longUsernameDisplay } from '../../../generic/string/longUsernameDisplay'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'

export default function Dropzone({ uploadUserIcon, setImageData, closeModal }) {
  const { currentUser: user } = useGetCurrentUser()
  const toast = useRef(null)
  const [totalSize, setTotalSize] = useState(0)
  const fileUploadRef = useRef(null)
  const [fileUrl, setFileUrl] = useState(user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png')
  
  const { width } = useWindowSize();
  const uploadHandler = async (e) => {
    const fileObject = e.files[0]

    if (!fileObject.type.includes('image')) {
      toast.current.show({ severity: 'error', summary: 'Incorrect File Type', detail: 'Only Image Types Are Supported' })
      return
    }
    const formData = new FormData()
    formData.append('image', fileObject)

    try {
      toast.current.show({
        severity: 'info',
        closable: true,
        sticky: true,
        content: (
          <div className="flex align-items-center" style={{ flex: '1' }}>
            <div className="text-center">
              <ProgressSpinner style={{width: '50px', height: '50px'}} />
            </div>
            <div className="flex gap-2">
              Uploading Image
            </div>
          </div>
        ),
      })
      await uploadUserIcon(
        formData,
        user?.userId,
      )
      setTimeout(() => {
        toast.current.replace({
          severity: 'success', summary: 'Success', detail: 'File Uploaded', life: 2000,
        })
      }, 1000)
      setTimeout(() => {
        closeModal()
      }, 2000)
    } catch (error) {
      toast.current.replace({
        severity: 'error', summary: 'Error Uploading File', detail: error.response.data.error, sticky: true,
      })
    }
  }

  const onTemplateSelect = (e) => {
    let totalUploadSize = totalSize
    const {files} = e
    setFileUrl(files[0].objectURL)
    Object.keys(files).forEach((key) => {
      totalUploadSize += files[key].size || 0
    })


    const fileObject = e.files[0]

    if (!fileObject.type.includes('image')) {
      toast.current.show({ severity: 'error', summary: 'Incorrect File Type', detail: 'Only Image Types Are Supported' })
      return
    }
    const formData = new FormData()
    formData.append('image', fileObject)

    const [fileType, fileFormat] = fileObject.type.split('/')
    setImageData({
      imgFileForm: formData, 
      fileType,
      fileFormat
    })
    setTotalSize(totalUploadSize)
  }

  const onTemplateUpload = (e) => {
    let totalUploadSize = 0

    e.files.forEach((file) => {
      totalUploadSize += file.size || 0
    })

    setTotalSize(totalUploadSize)
    toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' })
  }

  const onTemplateRemove = (file, callback) => {
    setTotalSize(0)
    setFileUrl(user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png')
    callback()
  }

  const onTemplateClear = () => {
    setFileUrl(user?.iconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png')
    setTotalSize(0)
  }

  const headerTemplate = (options) => {
    const {
      className, chooseButton, uploadButton,
    } = options
    const value = (totalSize / 5000000) * 100
    const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B'
    return (
      <div className={`${className}`} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
        <Avatar image={fileUrl} size={width < 900 ? 'normal' : 'xlarge'} shape="circle" />
        <div className="flex align-items-center gap-3 ml-auto">
          {chooseButton}
          {uploadButton}

          <span className='text-sm'>
            {formatedValue}
            {' '}
            / 5 MB
          </span>
          <ProgressBar value={value} showValue={false} style={{ width: width < 900 ? '5rem' : '8rem', height: '12px' }} />
        </div>
      </div>
    )
  }
  
  const itemTemplate = (file, props) => (
    <div className="flex align-items-center flex-wrap justify-content-between">
      <div className="flex align-items-center" style={{ width: width < 900 ? '40%' : '60%' }}>
        <img alt={file.name} role="presentation" src={file.objectURL} width={300} />
        <span className="flex flex-column text-left ml-3">
          {longUsernameDisplay(file.name)}
          <small>{new Date().toLocaleDateString()}</small>
        </span>
      </div>
      {  width < 900 ? null : <Tag value={props.formatSize} severity="warning" className="px-3 py-2" /> }
      <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={() => onTemplateRemove(file, props.onRemove)} />
    </div>
  )

  const emptyTemplate = () => (
    <div className="flex align-items-center flex-column">
      <i
        className="pi pi-image mt-3 p-5"
        style={{
          fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)',
        }}
      />
      <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
        Drag and Drop Image Here
      </span>
    </div>
  )

  const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: width < 900 ? true : false, className: 'custom-choose-btn p-button-rounded p-button-outlined' }
  const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: width < 900 ? true : false, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' }
  const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' }

  return (
    <div className="flex align-items-center flex-column w-full lg:w-10">
      <Toast ref={toast} />

      <Tooltip
        target=".custom-choose-btn"
        content="Choose"
        position="bottom"
        pt={{
          text: {
            className: 'px-2 py-1',
          },
        }}
      />

      <FileUpload
        // disabled={fileSelected}
        ref={fileUploadRef}
        name="image"
        accept="image/*"
        multiple={false}
        maxFileSize={5000000}
        onUpload={onTemplateUpload}
        onSelect={onTemplateSelect}
        onError={onTemplateClear}
        onClear={onTemplateClear}
        headerTemplate={headerTemplate}
        itemTemplate={itemTemplate}
        emptyTemplate={emptyTemplate}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
        customUpload
        uploadHandler={e => typeof uploadUserIcon === 'function' ? uploadHandler(e) : () => console.log("No Upload Handler Provided")}
        style={{
          width: '100%',
        }}
      />
      {/* <Button
        className="my-4 w-5"
        type="submit"
        icon="pi pi-fw pi-cloud-upload"
        label="Upload"
        raised
      /> */}
    </div>
  )
}
