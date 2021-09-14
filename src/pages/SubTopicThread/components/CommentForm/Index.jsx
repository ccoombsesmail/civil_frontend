import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useParams } from 'react-router-dom'

import { Formik, Field, ErrorMessage } from 'formik'
import TextArea from '../../../CommonComponents/TextArea/Index'
// import Error from '../CommonComponents/ErrorMessage/Index'
import Button from '../../../CommonComponents/Button/Index'
import { FormContainer, InputWrapper, Container } from './Style'
import commentActions from '../../../../redux/actions/comments'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

const CreateCommentForm = ({ subTopic }) => {
  const { subTopicId } = useParams()
  const dispatch = useDispatch()
  const { createComment } = bindActionCreators(commentActions, dispatch)
  const user = useSelector((s) => s.session.currentUser)

  return (
    <Container>
      <h1>Jump In the discussion about <b>{subTopic?.title}</b></h1>
      <Formik
        initialValues={{ content: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.content) {
            errors.content = 'Write Something'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          createComment({ ...values, sentiment: 'negative', subtopicId: subTopicId, createdBy: user.username })
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <FormContainer>
            <InputWrapper>
              <Field type="text" name="content" component={TextArea} width="100%" />
            </InputWrapper>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </FormContainer>
        )}
      </Formik>
    </Container>

  )
}

export default CreateCommentForm
