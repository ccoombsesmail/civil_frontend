import React, { useCallback } from 'react'
import UserIcon from '../../../../../../../CommonComponents/UserIcon/Index'
import { CREATE_TOPIC } from '../../../../../../../App/Modal/Index'
import { HeaderContainer, FlexDiv } from './Style/index'
import ExpandButton from '../../../../../../../CommonComponents/Buttons/ExpandButton/Index'
import useModal from '../../../../../../../CommonComponents/Lexical/hooks/useModal.tsx'

const CreateTopicForm = React.lazy(() => import('../../../../../../../Forms/TopicForm/Index'))

const Header = ({ user }) => {
  const [modal, showModal] = useModal()
  const onClick = useCallback(() => {
    showModal('Create Topic', (onClose) => (
      <CreateTopicForm closeModal={onClose} />
    ))
  }, [])

  return (
    <HeaderContainer>
      {modal}
      <UserIcon width="4vw" iconSrc={user?.iconSrc} username={user?.username} userId={user?.userId} />
      <FlexDiv>
        <p className="text-focus-in">
          Hey
          {' '}
          <b>{user?.username || 'Friend'}</b>
          {'! '}
          Have Something You Would Like To Discuss?
        </p>
        <ExpandButton
          type="button"
          backgroundColor="var(--m-primary-btn-color)"
          onClick={onClick}
          width="100%"
        >
          Create Topic +
        </ExpandButton>
      </FlexDiv>
    </HeaderContainer>
  )
}
export default Header
