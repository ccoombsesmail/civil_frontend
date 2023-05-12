import React, { useCallback } from 'react'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import UserIcon from '../../../../../../CommonComponents/UserIcon/Index'
import { HeaderContainer, FlexDiv } from './Style/index'
import ExpandButton from '../../../../../../CommonComponents/Buttons/ExpandButton/Index'
import useModal from '../../../../../../CommonComponents/Lexical/hooks/useModal'
import { initialConfig } from '../../../../../../CommonComponents/Lexical/App'

const CreateSpaceForm = React.lazy(() => import('../../../../../../Forms/SpaceForm/Index'))

function Header({ user }) {
  const [modal, showModal] = useModal()
  const onClick = useCallback(() => {
    showModal('Create Space', (onClose) => (
      <CreateSpaceForm closeModal={onClose} />
    ))
  }, [])

  return (
    <HeaderContainer>
      <LexicalComposer initialConfig={initialConfig}>
        {modal}
      </LexicalComposer>

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
          bgColor="var(--m-primary-btn-color)"
          onClick={onClick}
          width="100%"
        >
          Create Space +
        </ExpandButton>
      </FlexDiv>
    </HeaderContainer>
  )
}
export default Header
