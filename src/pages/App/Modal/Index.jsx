/* eslint-disable react/prop-types */
import React, { Suspense } from 'react'
import StrapModal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux'
// import { SignIn } from '@clerk/clerk-react'

// import SignUpForm from '../../SessionForms/SignUp/Index'
// import CreateTopicForm from '../../TopicForm/Index'
// import CreateSubTopicForm from '../../SubTopicForm/Index'
// import CommentForm from '../../CommentForm/Index'
import { ModalWrapper } from './Style/index'

import UploadIconForm from '../../Dashboard/components/UploadIconForm/Index'

const CreateTopicForm = React.lazy(() => import(
  /* webpackChunkName: "topic-form" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */ '../../TopicForm/Index'
))

const CommentForm = React.lazy(() => import(
  /* webpackChunkName: "comment-form" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */ '../../CommentForm/Index'
))

const CreateSubTopicForm = React.lazy(() => import(
  /* webpackChunkName: "subtopic-form" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */ '../../SubTopicForm/Index'
))
export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const CREATE_TOPIC = 'CREATE_TOPIC'
export const CREATE_SUB_TOPIC = 'CREATE_SUB_TOPIC'
export const REPLY = 'REPLY'
export const ICON_FORM = 'ICON_FORM'

const Modal = ({ closeModal }) => {
  const { modalType, modalProps } = useSelector((s) => s.ui)

  const isOpen = useSelector((s) => s.ui.modalOpen)
  let component
  switch (modalType) {
    // case SIGN_UP:
    //   component = <SignUpForm />
    //   break
    // case SIGN_IN:
    //   component = <SignIn />
    //   break
    case CREATE_TOPIC:
      component = <CreateTopicForm />
      break
    case CREATE_SUB_TOPIC:
      component = <CreateSubTopicForm />
      break
    case REPLY:
      component = <CommentForm modalProps={modalProps} />
      break
    case ICON_FORM:
      component = <UploadIconForm />
      break
    default:
      break
  }

  return (
    <StrapModal contentClassName="react-strap-modal" show={isOpen} onHide={closeModal} container={document.getElementById('main-container')}>
      <ModalWrapper>
        <Suspense fallback={<></>}>
          {component}
        </Suspense>
      </ModalWrapper>
    </StrapModal>
  )
}

export default Modal
