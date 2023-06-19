import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Formik, Field } from 'formik'

import useBindDispatch from '../hooks/redux/useBindDispatch'

import Input from '../CommonComponents/Form/Input/Index'
import Button from '../CommonComponents/Button/Index'

// import subSpaceActions from '../../redux/actions/discussions'
// import spaceActions from '../../redux/actions/spaces'
import uiActions from '../../redux/actions/ui'
import opposingRecsActions from '../../redux/actions/opposing_recs'

import {
  FormContainer, InputsWrapper, Container, FieldWrapper,
} from './Style'
import ThemeTooltip from '../CommonComponents/Tooltip/Index'

function OpposingRecForm({ spaceId, subSpaceId }) {
  const { createOpposingRec, closeModal } = useBindDispatch(uiActions, opposingRecsActions)

  return (

    <Container>
      <Formik
        initialValues={{ recommendedContentId: '', externalRecommendedContent: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.recommendedContentId && !values.externalRecommendedContent) {
            errors.recommendedContentId = 'At Least One Input Required'
            errors.externalRecommendedContent = 'At Least One Input Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          const isDiscussion = Boolean(subSpaceId)
          createOpposingRec({
            targetContentId: subSpaceId || spaceId,
            recommendedContentId: values.recommendedContentId || null,
            isDiscussion,
            externalRecommendedContent: values.externalRecommendedContent || null,
            similarityScore: 0.0,
          })
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                Recommened Some Content That Presents A Differing Viewpoint On This Space
              </Modal.Title>
            </Modal.Header>
            <FormContainer>
              <Modal.Body>
                <InputsWrapper>
                  <FieldWrapper>
                    <Field type="text" placeholder="Recommended Content Id" label="Recommended Content Id" name="recommendedContentId" component={Input} />
                    <ThemeTooltip
                      tooltipHeader="Content Id"
                      tooltipText="Provide The Id From A Space Or Subspace Posted on Civil"
                    />
                  </FieldWrapper>
                  <FieldWrapper>
                    <Field type="text" placeholder="External Content" label="External Content" name="externalRecommendedContent" component={Input} />
                    <ThemeTooltip
                      tooltipHeader="External Content"
                      tooltipText="Link To Content From Outside of Civil (e.g publication, news article, or YouTube Video"
                    />
                  </FieldWrapper>
                </InputsWrapper>
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

export default OpposingRecForm
