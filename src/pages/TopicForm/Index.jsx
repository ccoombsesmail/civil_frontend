import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import { Formik, Field } from 'formik'
import { Collapse, Fade } from 'react-bootstrap'
// import { BsCameraVideoFill, BsImageFill } from 'react-icons/bs'

import useBindDispatch from '../hooks/redux/useBindDispatch'
import useHandleSubmit from './hooks/useHandleSubmit'
import useConfigFormErrors from '../util/form_helpers/hooks/useConfigFormErrors'
import uiActions from '../../redux/actions/ui'

import { DownArrowCircleSvg } from '../../svgs/svgs'
import Input from '../CommonComponents/Form/Input/Index'
import Select from '../CommonComponents/Form/Select/Index'
import RichTextEditor from '../CommonComponents/RichTextEditor/Index'
import Button from '../CommonComponents/Button/Index'
import UploadMediaContainer from './components/UploadMedia/Index'

import ThemeTooltip from '../CommonComponents/Tooltip/Index'

import {
  FormContainer, InputsContainer, Container, Left, Right,
  Line, Arrow, FlexDiv,
} from './Style'

import { INIT_TOPIC_FORM_VALUES } from '../util/form_helpers/init_form_values'
import useGetLinkMetaDataOnBlur from './hooks/useGetLinkMetaDataOnBlur'
import DisplayMedia from './components/DisplayMedia/Index'

const ERRORS = {
  title: { REQUIRED: true },
  // description: { REQUIRED: true, MIN_LENGTH: 10 },
  summary: { REQUIRED: true, MIN_LENGTH: 10 },
  category: { REQUIRED: true },
}

const CreateTopicForm = () => {
  const [open, setOpen] = useState(false)
  const [imgFile, setImgFile] = useState(null)
  const [videoFile, setVideoFile] = useState(null)

  const [rotate, setRotate] = useState(0)
  const [content, setContent] = useState('')

  const validator = useConfigFormErrors(ERRORS)
  const { metaData, getLinkMetaDataOnBlur } = useGetLinkMetaDataOnBlur()
  const handleSubmit = useHandleSubmit(metaData)
  const { closeModal } = useBindDispatch(uiActions)

  return (
    <Container>
      <Formik
        initialValues={INIT_TOPIC_FORM_VALUES}
        validate={validator}
        onSubmit={((values, params) => handleSubmit(values, params, content))}
      >
        {({ isSubmitting, setFieldValue, setFieldTouched }) => (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Create Topic</Modal.Title>
            </Modal.Header>

            <FormContainer>
              <Modal.Body>
                <InputsContainer>
                  <Left>
                    <FlexDiv>
                      <h2> Topic Description </h2>
                      <ThemeTooltip
                        tooltipHeader="Topic Description"
                        tooltipText="Provide information about the topic you would like to discuss"
                      />
                    </FlexDiv>
                    <Field type="text" name="title" component={Input} width="100%" placeholder="Enter A Topic Title" />
                    <Field type="text" name="summary" component={Input} width="100%" placeholder="Give A Short Opinion Or Point" />
                    <Field type="text" name="category" component={Select} setFieldValue={setFieldValue} setFieldTouched={setFieldTouched} width="100%" />
                  </Left>
                  <Right>
                    <FlexDiv>
                      <h2> Link to what you want to discuss here... </h2>
                      <ThemeTooltip
                        tooltipHeader="Discussed Content"
                        tooltipText="Add a link to the external content you would like to discuss (
                        e.g a YouTube video, Tweet, publication, or anything else)"
                      />
                    </FlexDiv>

                    <Field type="url" name="contentUrl" placeholder="Link To Content" component={Input} width="100%" onBlur={getLinkMetaDataOnBlur} />
                    <Line />
                    <FlexDiv>
                      <h2> Add your own media content </h2>
                      <ThemeTooltip
                        tooltipHeader="User Provided Content"
                        tooltipText="This could be an image, graphic, or video pertaining to the topic you would like to discuss"
                      />
                    </FlexDiv>
                    <UploadMediaContainer
                      setFieldValue={setFieldValue}
                      imgFile={imgFile}
                      videoFile={videoFile}
                      setImgFile={setImgFile}
                      setVideoFile={setVideoFile}
                    />
                  </Right>
                </InputsContainer>
                <Line />
                <DisplayMedia
                  imgFile={imgFile}
                  videoFile={videoFile}
                  metaData={metaData}
                />
                <RichTextEditor content={content} setContent={setContent} />
                <Arrow
                  rotate={rotate}
                  // icon={<DownArrowCircleSvg />}
                  onClick={() => {
                    setOpen(!open)
                    setRotate(rotate + (open ? -180 : 180))
                  }}
                >
                  <DownArrowCircleSvg />
                </Arrow>
                <Fade in={!open}>
                  <div>
                    Enter Supplemental Information
                  </div>
                </Fade>
                <InputsContainer>
                  <Collapse in={open}>
                    <div style={{ whiteSpace: 'nowrap', width: '100%' }}>
                      <FlexDiv>
                        <h2> Enter Links To Supplemental Evidence... </h2>
                        <ThemeTooltip
                          tooltipText="Provide links to additional reading or evidence etc..."
                          tooltipHeader="Supplemental Information"
                        />
                      </FlexDiv>
                      <Field type="url" name="Evidence Link 1" component={Input} width="100%" />
                      <Field type="url" name="Evidence Link 2" component={Input} width="100%" />
                      <Field type="url" name="Evidence Link 3" component={Input} width="100%" />
                    </div>
                  </Collapse>
                </InputsContainer>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" disabled={isSubmitting} onClick={closeModal}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Modal.Footer>
            </FormContainer>
          </>
        )}
      </Formik>
    </Container>
  )
}

export default CreateTopicForm
