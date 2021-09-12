/* eslint-disable react/prop-types */
import React from 'react'
import StrapModal from 'react-bootstrap/Modal'

import { withRouter } from 'react-router'
import { useSelector } from 'react-redux'
import SignUpForm from '../../SessionForms/SignUp/Index'
import SignInForm from '../../SessionForms/SignIn/Index'
import CreateTopicForm from '../../TopicForm/Index'
import CreateSubTopicForm from '../../SubTopicForm/Index'
import { ModalWrapper } from './Style/index'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const CREATE_TOPIC = 'CREATE_TOPIC'
export const CREATE_SUB_TOPIC = 'CREATE_SUB_TOPIC'

// const styles = {
//   overlay: {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: 'rgba(255, 255, 255, 0.75)',
//     WebkitBoxShadow: '3px 5px 7px 5px rgba(0,0,0,0.98)',
//     boxShadow: '3px 5px 7px 5px rgba(0,0,0,0.98)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: '10px',
//   },
//   content: {
//     border: 'none',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// }

const Modal = ({ closeModal }) => {
  const modalType = useSelector((s) => s.ui.modalType)
  const isOpen = useSelector((s) => s.ui.modalOpen)
  let component
  switch (modalType) {
    case SIGN_UP:
      component = <SignUpForm />
      break
    case SIGN_IN:
      component = <SignInForm />
      break
    case CREATE_TOPIC:
      component = <CreateTopicForm />
      break
    case CREATE_SUB_TOPIC:
      component = <CreateSubTopicForm />
      break
    default:
      break
  }

  return (
    <StrapModal contentClassName="react-strap-modal" show={isOpen} onHide={closeModal}>
      <ModalWrapper>
        {component}
      </ModalWrapper>
    </StrapModal>
  )
}

export default withRouter(Modal)
