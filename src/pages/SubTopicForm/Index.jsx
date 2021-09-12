import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useParams, useLocation } from 'react-router-dom'

import { Formik, Field, ErrorMessage } from 'formik'
import Input from '../CommonComponents/Input/Index'
import Error from '../CommonComponents/ErrorMessage/Index'
import Button from '../CommonComponents/Button/Index'
import { FormContainer, InputWrapper, Container } from './Style'
import subTopicActions from '../../redux/actions/subtopics'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

const CreateSubTopicForm = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  const [topicId] = pathname.match(uuidRegEx)
  const dispatch = useDispatch()
  const { createSubTopic } = bindActionCreators(subTopicActions, dispatch)
  const user = useSelector((s) => s.session.currentUser)
  return (
    <Container>
      <h1>Create Sub Topic</h1>
      <Formik
        initialValues={{ title: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.title) {
            errors.title = 'Title Is Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          createSubTopic({ ...values, topicId, createdBy: user.username })
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <FormContainer>
            <InputWrapper>
              <Field type="text" name="title" component={Input} />
              <ErrorMessage name="title" component={Error} />
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

export default CreateSubTopicForm
