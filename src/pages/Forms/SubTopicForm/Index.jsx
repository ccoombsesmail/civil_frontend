import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Collapse, Fade } from 'react-bootstrap'

import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Formik, Field } from 'formik'

import useBindDispatch from '../../hooks/redux/useBindDispatch'
import useHandleSubmit from './hooks/useHandleSubmit'
import useGetLinkMetaDataOnBlur from '../hooks/useGetLinkMetaDataOnBlur'

import Input from '../../CommonComponents/Form/Input/Index'
import Button from '../../CommonComponents/Button/Index'

import uiActions from '../../../redux/actions/ui'
import topicActions from '../../../redux/actions/topics'

import ThemeTooltip from '../../CommonComponents/Tooltip/Index'
import UploadMediaContainer from '../components/UploadMedia/Index'
import DisplayMedia from '../components/DisplayMedia/Index'
import LinkTypeIcon from '../components/LinkTypeIcon/Index'

import {
  FormContainer, Left, Right, FlexDiv, Container, InputsContainer, Arrow, Line,
} from './Style'
import { DownArrowCircleSvg } from '../../../svgs/svgs'
import RichTextEditor from '../../CommonComponents/RichTextEditor/Index'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'
import { useGetTopicQuery } from '../../../api/services/topics'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

const CreateSubTopicForm = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [imgFile, setImgFile] = useState(null)
  const [videoFile, setVideoFile] = useState(null)
  const [metaData, setMetaData] = useState(null)

  const [rotate, setRotate] = useState(0)
  const [richTextEditorContent, setRichTextEditorContent] = useState({
    rawHTML: '',
    content: '',
  })
  const { currentUser } = useGetCurrentUser()
  const [topicId] = pathname.match(uuidRegEx)

  const { externalContentUrl, getContentUrlOnBlur } = useGetLinkMetaDataOnBlur()
  const handleSubmit = useHandleSubmit(metaData, topicId)

  const { getTopic, closeModal } = useBindDispatch(
    uiActions, topicActions,
  )

  const { data: topic, isUninitialized } = useGetTopicQuery(topicId, {
    skip: !currentUser || !topicId,
  })

  useEffect(() => {
    getTopic(topicId, currentUser?.id)
  }, [])

  return (
    <Container>
      <Formik
        initialValues={{ title: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.title) {
            errors.title = 'Title Is Required'
          }
          return errors
        }}
        onSubmit={((values, params) => handleSubmit(values, params, richTextEditorContent.rawHTML))}
      >
        {({ isSubmitting, setFieldValue }) => (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                Create Sub Topic Regarding The Topic
                {' '}
                {isUninitialized ? null : topic?.title}
              </Modal.Title>
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
                  externalContentUrl={externalContentUrl}
                  setMetaData={setMetaData}
                />
                <RichTextEditor content={richTextEditorContent.content} setContent={setRichTextEditorContent} />
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

export default CreateSubTopicForm
