/* eslint-disable react/jsx-curly-newline */
import React, { useState, useMemo } from 'react'

import { Formik, Field } from 'formik'
import { Collapse, Fade } from 'react-bootstrap'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import useHandleSubmit from './hooks/useHandleSubmit'
import useConfigFormErrors from '../../util/form_helpers/hooks/useConfigFormErrors'

import { DownArrowCircleSvg } from '../../../svgs/svgs'
import Input from '../../CommonComponents/Form/Input3/Index'
import Select from '../../CommonComponents/Form/Select/Index'
import ExpandButton from '../../CommonComponents/Buttons/ExpandButton/Index'
import UploadMediaContainer from '../components/UploadMedia/Index'

import ThemeTooltip from '../../CommonComponents/Tooltip/Index'

import LexicalEditor from '../../CommonComponents/Lexical/App.tsx'

import {
  FormContainer, InputsContainer, Container, Left, SectionDescription, FlexDivLink,
  Line, Arrow, FlexDiv, Footer,
} from './Style'

import { INIT_TOPIC_FORM_VALUES } from '../../util/form_helpers/init_form_values'
import useGetLinkMetaDataOnBlur from '../hooks/useGetLinkMetaDataOnBlur'
import EmbedDropdown from '../components/EmbedDropdown/Index'

import { LexicalFormContext } from './LexicalFormContext'
import DisplayMedia from '../components/DisplayMedia/Index'

const VALIDATIONS = {
  title: { REQUIRED: true },
  // summary: { REQUIRED: true, MIN_LENGTH: 5 },
  category: { REQUIRED: true },
}

function CreateTopicForm({ closeModal }) {
  const [open, setOpen] = useState(false)
  const [imgFile, setImgFile] = useState(null)
  const [videoFile, setVideoFile] = useState(null)

  const [rotate, setRotate] = useState(0)

  const [editor] = useLexicalComposerContext()

  const validator = useConfigFormErrors(VALIDATIONS)
  const { externalContentUrl, setContentUrl } = useGetLinkMetaDataOnBlur()

  const handleSubmit = useHandleSubmit(externalContentUrl?.data, closeModal, editor)

  const contextValues = useMemo(() => ({
    setContentUrl,
  }), [setContentUrl])

  return (
    <Container>
      <Formik
        initialValues={INIT_TOPIC_FORM_VALUES}
        validate={validator}
        onSubmit={((values, params) => handleSubmit(values, params, externalContentUrl))}
      >
        {({ isSubmitting, setFieldValue, setFieldTouched }) => (
          <FormContainer>
            <InputsContainer>
              <Left>
                <FlexDiv>
                  <SectionDescription> Topic Description </SectionDescription>
                  <ThemeTooltip
                    tooltipHeader="Topic Description"
                    tooltipText="Provide information about the topic you would like to discuss"
                  />
                </FlexDiv>
                <Field type="text" name="title" label="Title*" component={Input} placeholder="Enter A Topic Title" />
                <Field
                  type="text"
                  name="category"
                  label="Category"
                  component={Select}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
                <Line />

                <FlexDiv>
                  <SectionDescription> Add your own media content </SectionDescription>
                  <ThemeTooltip
                    tooltipHeader="User Provided Content"
                    tooltipText="This could be an image, graphic, or video pertaining to the topic you would like to discuss"
                  />
                </FlexDiv>
                <FlexDiv direction="column">
                  <UploadMediaContainer
                    setFieldValue={setFieldValue}
                    imgFile={imgFile}
                    videoFile={videoFile}
                    setImgFile={setImgFile}
                    setVideoFile={setVideoFile}
                  />
                  <DisplayMedia imgFile={imgFile} videoFile={videoFile} />
                </FlexDiv>
                <Line />

                <FlexDiv>
                  <SectionDescription>
                    Link to what you want to discuss here...
                  </SectionDescription>
                  <ThemeTooltip
                    tooltipHeader="Discussed Content"
                    tooltipText="Add a link to the external content you would like to discuss (
                        e.g a YouTube video, Tweet, publication, or anything else). Use this if the content you are linking is the main subject of the topic"
                  />
                </FlexDiv>
                <FlexDivLink className="toolbar" id="embed-toolbar">
                  <EmbedDropdown setContentUrl={setContentUrl} />
                </FlexDivLink>
              </Left>
            </InputsContainer>
            <Line />
            <LexicalFormContext.Provider value={contextValues}>
              <div id="insert-embed-node" />
              <LexicalEditor />
            </LexicalFormContext.Provider>

            <Arrow
              rotate={rotate}
              onClick={() => {
                setOpen(!open)
                setRotate(rotate + (open ? -180 : 180))
              }}
            >
              <DownArrowCircleSvg />
            </Arrow>
            <Fade in={!open}>
              <div>
                References
              </div>
            </Fade>
            <InputsContainer>
              <Collapse in={open}>
                <div style={{ whiteSpace: 'nowrap', width: '100%' }}>
                  <FlexDiv>
                    <h2> Enter Links To Supplemental Evidence </h2>
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
            <Footer>
              <ExpandButton
                type="submit"
                bgColor="var(--m-primary-btn-color)"
                disabled={isSubmitting}
                onClick={closeModal}
              >
                Cancel
              </ExpandButton>
              <ExpandButton
                type="submit"
                bgColor="var(--m-primary-btn-color)"
                disabled={isSubmitting}
              >
                Submit
              </ExpandButton>
            </Footer>
          </FormContainer>
        )}
      </Formik>
    </Container>
  )
}

export default CreateTopicForm
