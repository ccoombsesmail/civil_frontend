import React, { useCallback, useContext, useState } from 'react'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { Dialog } from 'primereact/dialog'
import UserIcon from '../../../../../../CommonComponents/UserIcon/Index'
import { HeaderContainer, FlexDiv } from './Style/index'
import ExpandButton from '../../../../../../CommonComponents/Buttons/ExpandButton/Index'
import { initialConfig } from '../../../../../../CommonComponents/Lexical/App.tsx'
import { LoginFormVisibleStateContext } from '../../../../../../../LoginFormVisibleStateContext'

import CreateSpaceForm from '../../../../../../Forms/SpaceForm/Index'

function Header({ user }) {
  const [spaceFormVisible, setSpaceFormVisible] = useState(false)
  const { setLoginFormVisible } = useContext(LoginFormVisibleStateContext)

  const onCreateSpaceBtnClick = useCallback(() => {
    if (user) setSpaceFormVisible(true)
    else setLoginFormVisible(true)
  }, [user])

  return (
    <HeaderContainer>
      <LexicalComposer initialConfig={initialConfig}>
        <Dialog pt={{
          content: {
            className: 'p-0 lg:p-1 w-full'
          }
        }} header="Create Space" visible={spaceFormVisible} onHide={() => setSpaceFormVisible(false)}>
          <CreateSpaceForm closeModal={() => setSpaceFormVisible(false)} />
        </Dialog>
      </LexicalComposer>
      <UserIcon size="4vw" iconSrc={user?.iconSrc} username={user?.username} userId={user?.userId} />
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
          bgColor="var(--primary-color)"
          width="100%"
          onClick={onCreateSpaceBtnClick}
        >
          Create Space +
        </ExpandButton>
      </FlexDiv>
    </HeaderContainer>
  )
}
export default Header
