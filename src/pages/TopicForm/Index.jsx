import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-bootstrap/Modal'

import { Formik, Field } from 'formik'
import Input from '../CommonComponents/Input/Index'
import TextArea from '../CommonComponents/TextArea/Index'
import Select from '../CommonComponents/Select/Index'
import { FiArrowDownCircle } from "react-icons/fi";

import RichTextEditor from '../CommonComponents/RichTextEditor/Index'
import Button from '../CommonComponents/Button/Index'
import { FormContainer, InputsContainer, Container, Left, Right, Line, Arrow } from './Style'
import topicsActions from '../../redux/actions/topics'
import uiActions from '../../redux/actions/ui'
import { Collapse, Fade } from 'react-bootstrap'

const CreateTopicForm = () => {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [content, setContent] = useState("");

  const dispatch = useDispatch()
  const { createTopic, closeModal } = bindActionCreators({ ...topicsActions, ...uiActions }, dispatch)
  const user = useSelector((s) => s.session.currentUser)
  return (
    <Container>
      <Formik
        initialValues={{ title: '', description: '', tweetUrl: '', ytUrl: '', summary: '', category: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.title) {
            errors.title = 'Title Is Required'
          }
          if (!values.summary) {
            errors.summary = 'Summary Is Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          const eLinks = Object.entries(values).map(([k, v]) => {
            return k.includes('Evidence') ? v : null
          }).filter(Boolean) 
          const frLinks = Object.entries(values).map(([k, v]) => {
            return k.includes('Information') ? v : null
          }).filter(Boolean) 
          createTopic({ ...values, description: content, createdBy: user.username, evidenceLinks: eLinks, furtherReadingLinks: frLinks })
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Create Topic</Modal.Title>
            </Modal.Header>

            <FormContainer>
              <Modal.Body style={{ textAlign: 'center'}}>
                <InputsContainer>
                  <Left>
                    <h2> What do you want to discuss? </h2>
                    <Field type="text" name="title" component={Input} width="100%" placeholder="Enter A Topic Title" />
                    <Field type="text" name="summary" component={Input} width="100%" placeholder="Give A Short Opinion Or Point" />
                    <Field type="text" name="category" component={Select} width="100%" />
                  </Left>
                  <Right>
                    <h2> Link to what you want to discuss here... (optional) </h2>
                    <Field type="url" name="tweetUrl" component={Input} width="100%" />
                    <Field type="url" name="ytUrl" placeholder={"Link To A YouTube Video"} component={Input} width="100%" />
                  </Right>
                </InputsContainer>
                <Line />
                <RichTextEditor content={content} setContent={setContent} />
                <Arrow size={35} rotate={rotate} onClick={() => { 
                  setOpen(!open)
                  setRotate(rotate + 180)
                }} 
                />
                <Fade in={!open}>
                  <div>
                    Enter Supplemental Information 
                  </div>
                </Fade>
                <InputsContainer>
                  <Collapse in={open}>
                    <div style={{whiteSpace: 'nowrap', width: '100%'}}>
                      <Left>
                        <h2> Enter Links To Supplemental Evidence... </h2>
                        <Field type="url" name="Evidence Link 1" component={Input} width="100%" />
                        <Field type="url" name="Evidence Link 2" component={Input} width="100%" />
                        <Field type="url" name="Evidence Link 3" component={Input} width="100%" />
                      </Left>
                      <Right>
                        <h2> Links To Further Readings... </h2>
                        <Field type="url" name="Information Link 1" component={Input} width="100%" />
                        <Field type="url" name="Information Link 2" component={Input} width="100%" />
                        <Field type="url" name="Information Link 3" component={Input} width="100%" />                  
                      </Right>
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
