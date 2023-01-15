/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { Suspense } from 'react'
import StrapModal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux'
import { ModalWrapper } from './Style/index'

import { CREATE_TAG_FORM } from '../../../redux/actions/session/index'
import { CircleLoading } from '../../../svgs/spinners/CircleLoading'

// import CreateTopicForm from '../../Forms/TopicForm/Index'

const CreateTopicForm = React.lazy(() => import('../../Forms/TopicForm/Index'))

const CommentForm = React.lazy(() => import('../../CommentForm/Index'))

const CreateSubTopicForm = React.lazy(() => import('../../Forms/SubTopicForm/Index'))

const OpposingRecForm = React.lazy(() => import('../../OpposingRecForm/Index'))
const CreateTagForm = React.lazy(() => import('../../CreateTagForm/Index'))
const VoteForm = React.lazy(() => import('../../VoteForm/Index'))
const ReportForm = React.lazy(() => import('../../ReportForm/Index'))

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
        <Suspense fallback={<CircleLoading size="20vw" />}>
          {component}
        </Suspense>
      </ModalWrapper>
    </StrapModal>
  )
}

export default Modal
