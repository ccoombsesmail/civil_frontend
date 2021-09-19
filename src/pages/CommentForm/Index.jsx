import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useParams } from 'react-router-dom'

import { Formik, Field, ErrorMessage } from 'formik'
import TextArea from '../CommonComponents/TextArea/Index'
import ThreeWayToggle from '../CommonComponents/ThreeWayToggle/Index'
import CheckBoxPressed from '../CommonComponents/CheckBoxPressed/Index'
import Button from '../CommonComponents/Button/Index'

import { FormContainer, InputWrapper, Container, Toolbar } from './Style'
import commentActions from '../../redux/actions/comments'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

const CreateCommentForm = ({ subTopic }) => {
  const { subTopicId } = useParams()
  const dispatch = useDispatch()
  const { createComment } = bindActionCreators(commentActions, dispatch)
  const user = useSelector((s) => s.session.currentUser)

  return (
    <Container>
      <Formik
        initialValues={{ 
          content: '', 
          positive: '',
          negative: '',
          neutral: '',
        }}
        validate={(values) => {
          const errors = {}
          if (!values.content) {
            errors.content = 'Write Something'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting, resetForm  }) => {
          const { positive, negative, neutral} = values
          let sentiment;
          if (positive) sentiment = 'positive'
          if (neutral) sentiment = 'neutral'
          if (negative) sentiment = 'negative'
          createComment({ ...values, sentiment, subtopicId: subTopicId, createdBy: user.username })
          setSubmitting(false)
          resetForm({})
        }}
      >
        {({ isSubmitting }) => (
          <FormContainer>
            <InputWrapper>
              <Field type="text" name="content" component={TextArea} width="100%" />
              <section>
                <Toolbar> 
                  <Field text="Positive" type="checkbox" name="positive" component={CheckBoxPressed} width="100%" color='var(--m-secondary-background-color)' />
                  <Field text="Neutral" type="checkbox" name="neutral" component={CheckBoxPressed} width="100%" color='var(--m-primary-background-color)' />
                  <Field text="Negative" type="checkbox" name="negative" component={CheckBoxPressed} width="100%" color='var(--m-primary-color)' />
                </Toolbar>
                <Button small={true} type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </section>
            </InputWrapper>
            {/* <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button> */}
          </FormContainer>
        )}
      </Formik>
    </Container>

  )
}

export default CreateCommentForm
