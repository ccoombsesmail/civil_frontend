/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import { Formik, Field } from 'formik'
import { Collapse, Fade } from 'react-bootstrap'

import useBindDispatch from '../../hooks/redux/useBindDispatch'
import useHandleSubmit from './hooks/useHandleSubmit'
import useConfigFormErrors from '../../util/form_helpers/hooks/useConfigFormErrors'
import uiActions from '../../../redux/actions/ui'

import { DownArrowCircleSvg } from '../../../svgs/svgs'
import Input from '../../CommonComponents/Form/Input3/Index'
import Select from '../../CommonComponents/Form/Select/Index'
import RichTextEditor from '../../CommonComponents/RichTextEditor/Index'
import ExpandButton from '../../CommonComponents/Buttons/ExpandButton/Index'

import UploadMediaContainer from '../components/UploadMedia/Index'
import DisplayMedia from '../components/DisplayMedia/Index'
import LinkTypeIcon from '../components/LinkTypeIcon/Index'

import ThemeTooltip from '../../CommonComponents/Tooltip/Index'

import {
  FormContainer, InputsContainer, Container, Left, Right, SectionDescription, MobileOnlyLine,
  Line, Arrow, FlexDiv,
} from './Style'

import { INIT_TOPIC_FORM_VALUES } from '../../util/form_helpers/init_form_values'
import useGetLinkMetaDataOnBlur from '../hooks/useGetLinkMetaDataOnBlur'

const VALIDATIONS = {
  title: { REQUIRED: true },
  summary: { REQUIRED: true, MIN_LENGTH: 5 },
  category: { REQUIRED: true },
}

const CreateTopicForm = () => {
  const [open, setOpen] = useState(false)
  const [imgFile, setImgFile] = useState(null)
  const [videoFile, setVideoFile] = useState(null)
  const [metaData, setMetaData] = useState(null)

  const [rotate, setRotate] = useState(0)
  const [richTextEditorContent, setRichTextEditorContent] = useState({
    rawHTML: '',
    content: '',
  })

  const validator = useConfigFormErrors(VALIDATIONS)
  const { externalContentUrl, getContentUrlOnBlur } = useGetLinkMetaDataOnBlur()
  const handleSubmit = useHandleSubmit(metaData)
  const { closeModal } = useBindDispatch(uiActions)

  return (
    <Container>
      <Formik
        initialValues={INIT_TOPIC_FORM_VALUES}
        validate={validator}
        onSubmit={((values, params) => handleSubmit(values, params, richTextEditorContent.rawHTML))}
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
                      <SectionDescription> Topic Description </SectionDescription>
                      <ThemeTooltip
                        tooltipHeader="Topic Description"
                        tooltipText="Provide information about the topic you would like to discuss"
                      />
                    </FlexDiv>
                    <Field type="text" name="title" label="Title" component={Input} width="85%" placeholder="Enter A Topic Title" />
                    <Field type="text" name="summary" label="Summary" component={Input} width="85%" placeholder="Give A Short Opinion Or Point" />
                    <Field type="text" name="category" label="Category" component={Select} setFieldValue={setFieldValue} setFieldTouched={setFieldTouched} width="85%" />
                  </Left>
                  <MobileOnlyLine />
                  <Right>
                    <FlexDiv>
                      <SectionDescription>
                        Link to what you want to discuss here...
                      </SectionDescription>
                      <ThemeTooltip
                        tooltipHeader="Discussed Content"
                        tooltipText="Add a link to the external content you would like to discuss (
                        e.g a YouTube video, Tweet, publication, or anything else)"
                      />
                    </FlexDiv>
                    <FlexDiv>
                      <Field
                        type="url"
                        name="externalContentUrl"
                        placeholder="Link To Content"
                        label="Link To Content"
                        component={Input}
                        width="85%"
                        onBlur={getContentUrlOnBlur}
                      />
                      { externalContentUrl
                        ? (
                          <LinkTypeIcon
                            metaData={metaData}
                            externalContentUrl={externalContentUrl}
                          />
                        )
                        : null
                      }
                    </FlexDiv>

                    <Line />
                    <FlexDiv>
                      <SectionDescription> Add your own media content </SectionDescription>
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
                  externalContentUrl={externalContentUrl}
                  setMetaData={setMetaData}
                />
                <RichTextEditor
                  content={richTextEditorContent.content}
                  setContent={setRichTextEditorContent}
                />
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
                      <Field type="url" name="Evidence Link 1" component={Input} width="100%" label="Link To Evidence" />
                      <Field type="url" name="Evidence Link 2" component={Input} width="100%" label="Link To Evidence" />
                      <Field type="url" name="Evidence Link 3" component={Input} width="100%" label="Link To Evidence" />
                    </div>
                  </Collapse>
                </InputsContainer>
              </Modal.Body>
              <Modal.Footer>
                <ExpandButton
                  type="submit"
                  backgroundColor="var(--m-primary-btn-color)"
                  disabled={isSubmitting}
                  onClick={closeModal}
                >
                  Cancel
                </ExpandButton>
                <ExpandButton
                  type="submit"
                  backgroundColor="var(--m-primary-btn-color)"
                  disabled={isSubmitting}
                >
                  Submit
                </ExpandButton>
              </Modal.Footer>
            </FormContainer>
          </>
        )}
      </Formik>
    </Container>
  )
}

export default CreateTopicForm
