/* eslint-disable react/jsx-props-no-spreading */
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

import CreateTagForm from '../../CreateTagForm/Index'
import OpposingRecForm from '../../OpposingRecForm/Index'
import VoteForm from '../../VoteForm/Index'
import { CREATE_TAG_FORM } from '../../../redux/actions/session/index'
import { ReportForm } from '../../ReportForm/Index'

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
export const OPPOSING_REC_FORM = 'OPPOSING_REC_FORM'
export const REPORT_FORM = 'REPORT_FORM'
export const TOPIC_VOTE_FORM = 'TOPIC_VOTE_FORM'

export const REPLY_FROM_TOPIC = 'REPLY_FROM_TOPIC' // when replying directly to a topic

const Modal = ({ closeModal }) => {
  const { modalType, modalProps } = useSelector((s) => s.ui)

  const isOpen = useSelector((s) => s.ui.modalOpen)
  let component
  switch (modalType) {
    case CREATE_TOPIC:
      component = <CreateTopicForm />
      break
    case CREATE_SUB_TOPIC:
      component = <CreateSubTopicForm />
      break
    case REPLY:
      component = <CommentForm modalProps={modalProps} />
      break
    // case ICON_FORM:
    //   component = <UploadIconForm />
    //   break
    case OPPOSING_REC_FORM:
      component = <OpposingRecForm {...modalProps} />
      break
    case REPORT_FORM:
      component = <ReportForm {...modalProps} />
      break
    case TOPIC_VOTE_FORM:
      component = <VoteForm {...modalProps} />
      break
    case CREATE_TAG_FORM:
      component = <CreateTagForm {...modalProps} />
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
