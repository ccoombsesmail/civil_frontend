/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { Suspense } from 'react'
import StrapModal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux'
import { ModalWrapper } from './Style/index'

import { CREATE_TAG_FORM } from '../../../redux/actions/session/index'
import { CircleLoading } from '../../../svgs/spinners/CircleLoading'

const CreateSpaceForm = React.lazy(() => import('../../Forms/SpaceForm/Index'))

const CommentForm = React.lazy(() => import('../../Forms/CommentForm/Index'))

const CreateDiscussionForm = React.lazy(() => import('../../Forms/DiscussionForm/Index'))

const OpposingRecForm = React.lazy(() => import('../../OpposingRecForm/Index'))
const CreateTagForm = React.lazy(() => import('../../Forms/CreateTagForm/Index'))

export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const CREATE_SPACE = 'CREATE_SPACE'
export const CREATE_SUB_SPACE = 'CREATE_SUB_SPACE'
export const REPLY = 'REPLY'
export const ICON_FORM = 'ICON_FORM'
export const OPPOSING_REC_FORM = 'OPPOSING_REC_FORM'
export const REPORT_FORM = 'REPORT_FORM'
export const SPACE_VOTE_FORM = 'SPACE_VOTE_FORM'

export const REPLY_FROM_SPACE = 'REPLY_FROM_SPACE' // when replying directly to a space

function Modal({ closeModal }) {
  const { modalType, modalProps } = useSelector((s) => s.ui)

  const isOpen = useSelector((s) => s.ui.modalOpen)

  let component
  switch (modalType) {
    case CREATE_SPACE:
      component = <CreateSpaceForm />
      break
    case CREATE_SUB_SPACE:
      component = <CreateDiscussionForm />
      break
    case REPLY:
      component = <CommentForm modalProps={modalProps} />
      break
    case OPPOSING_REC_FORM:
      component = <OpposingRecForm {...modalProps} />
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
