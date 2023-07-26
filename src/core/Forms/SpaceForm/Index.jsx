/* eslint-disable react/jsx-curly-newline */
import React, { useState, useMemo } from 'react'

import { Formik } from 'formik'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { Button } from 'primereact/button'
import useHandleSubmit from './hooks/useHandleSubmit'
import useConfigFormErrors from '../../util/form_helpers/hooks/useConfigFormErrors'

import LexicalEditor from '../../CommonComponents/Lexical/App.tsx'

import {
  FormContainer, InputsContainer, Container, Left, SectionDescription,
  Line, FlexDiv, Footer,
} from './Style'

import { INIT_SPACE_FORM_VALUES } from '../../util/form_helpers/init_form_values'
import useGetLinkMetaDataOnBlur from '../hooks/useGetLinkMetaDataOnBlur'

import { LexicalFormContext } from './LexicalFormContext'
import FormikController from '../Formik/FormikController/Index'
import { useGetEnumsQueryState } from '../../../api/services/enums.ts'
import Overlay from '../../CommonComponents/Overlay/Index'
import Expandable from '../../CommonComponents/Expandable/Expandable'

const VALIDATIONS = {
  title: { REQUIRED: true },
  category: { REQUIRED: true },
}

function CreateSpaceForm({ closeModal }) {
  const [open, setOpen] = useState(false)
  const [editor] = useLexicalComposerContext()

  const validator = useConfigFormErrors(VALIDATIONS)
  const { externalContentUrl, setContentUrl } = useGetLinkMetaDataOnBlur()

  const handleSubmit = useHandleSubmit(externalContentUrl?.data, closeModal, editor)
  const { data: enums } = useGetEnumsQueryState()

  const contextValues = useMemo(() => ({
    setContentUrl,
  }), [setContentUrl])

  console.log(open)
  console.log(externalContentUrl)

  return (
    <Container id="space-form-container">
      <Formik
        initialValues={INIT_SPACE_FORM_VALUES}
        validate={validator}
        onSubmit={((values, params) => handleSubmit(values, params, externalContentUrl))}
      >
        {({ isSubmitting, setFieldTouched, ...rest }) => (
          <FormContainer>
            <InputsContainer>
              <Left>
                <Overlay
                  header="Space Title"
                  body="Enter A Title For The Space You Would Like To Create"
                  target="space_title_overlay"
                >
                  <SectionDescription> Space Title </SectionDescription>
                </Overlay>

                <FormikController
                  control="input"
                  label="Title*"
                  name="title"
                  type="text"
                  {...rest}
                />
                <Line />

                <FormikController
                  control="select"
                  name="category"
                  placeholder="Select A Category"
                  enums={enums}
                  {...rest}
                />
                <Line />
              </Left>
            </InputsContainer>
            <Overlay
              header="Space Description"
              body="Enter Additional Details About The Space You Are Creating. Be As Specific As Possible"
              target="space_description_overlay"
            >
              <SectionDescription> Space Description </SectionDescription>
            </Overlay>

            <LexicalFormContext.Provider value={contextValues}>
              <div id="insert-embed-node" />
              <LexicalEditor />
            </LexicalFormContext.Provider>
            <Overlay
              header="Supplemental Information"
              body="Provide links to additional reading or evidence etc..."
              target="space_links_overlay"
            >
              <SectionDescription> Enter Links To Supplemental Evidence </SectionDescription>
            </Overlay>
            <Button
              type="button"
              className="border-none w-3 flex justify-content-center"
              severity="secondary"
              text
              raised
              onClick={() => {
                setOpen(!open)
              }}
            >
              <i
                className={`chevron-down transition-transform transition-duration-500 bg-no-repeat h-1rem w-1rem ${open ? 'rotate-180' : ''}`}
              />
            </Button>

            <Expandable isOpen={open}>
              <FlexDiv direction="column" className="p-3">
                <FormikController
                  control="input"
                  label="Link To Evidence"
                  name="Evidence Link 1"
                  type="url"
                  {...rest}
                />
                <FormikController
                  control="input"
                  label="Link To Evidence"
                  name="Evidence Link 2"
                  type="url"
                  {...rest}
                />
                <FormikController
                  control="input"
                  label="Link To Evidence"
                  name="Evidence Link 3"
                  type="url"
                  {...rest}
                />
              </FlexDiv>
            </Expandable>
            <Footer>
              <Button
                type="button"
                disabled={isSubmitting}
                onClick={closeModal}
                label="Cancel"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                label="Submit"
                className="m-2"
              />

            </Footer>
          </FormContainer>
        )}
      </Formik>
    </Container>
  )
}

export default CreateSpaceForm
