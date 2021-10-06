import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useParams, useLocation } from 'react-router-dom'

import { Formik, Field, ErrorMessage } from 'formik'
import Input from '../CommonComponents/Input/Index'
import Error from '../CommonComponents/ErrorMessage/Index'
import Button from '../CommonComponents/Button/Index'
import { FormContainer, InputWrapper, Container } from './Style'
import subTopicActions from '../../redux/actions/subtopics'
import uiActions from '../../redux/actions/ui'
import topicActions from '../../redux/actions/topics'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

const CreateSubTopicForm = () => {
  const { pathname } = useLocation()
  const [topicId] = pathname.match(uuidRegEx)
  const dispatch = useDispatch()
  const { createSubTopic, getTopic, closeModal } = bindActionCreators({...subTopicActions, ...uiActions, ...topicActions}, dispatch)
  const user = useSelector((s) => s.session.currentUser)
  const topic = useSelector((s) => s.topics.list)?.find((topic) => topic.id === topicId)

  useEffect(() => {
    getTopic(topicId, user?.id)
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
        onSubmit={(values, { setSubmitting }) => {
          createSubTopic({ ...values, topicId, createdBy: user.username })
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <>
           <Modal.Header closeButton>
              <Modal.Title>Create Sub Topic Regarding The Topic {`"${topic?.title}"`}</Modal.Title>
            </Modal.Header>
          <FormContainer>
          <Modal.Body>
            <InputWrapper>
              <Field type="text" name="title" component={Input} />
            </InputWrapper>
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
