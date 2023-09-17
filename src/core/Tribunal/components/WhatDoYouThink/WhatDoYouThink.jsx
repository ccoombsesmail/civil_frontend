import React, { useState, memo, useContext, useCallback } from 'react'

import { useParams } from 'react-router-dom'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { Dialog } from 'primereact/dialog'
import useGetCommentState from './hooks/useGetCommentState'
import CreateCommentForm from '../../../Forms/CommentForm/Index'
import ExpandButton from '../../../CommonComponents/Buttons/ExpandButton/Index'
import { initialConfig } from '../../../CommonComponents/Lexical/App.tsx'
import { WhatDoYouThinkContainer } from './Style'
import { LoginFormVisibleStateContext } from '../../../../LoginFormVisibleStateContext'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'

function WhatDoYouThink({ space, comment, discussion }) {
  const { contentId } = useParams()
  const { currentUser } = useGetCurrentUser()
  const commentFormState = useGetCommentState(space, comment, discussion, contentId)
  const [visible, setVisible] = useState(false)

  const { setLoginFormVisible } = useContext(LoginFormVisibleStateContext)

  const handleClick = useCallback(() => {
    if (currentUser) setVisible(true)
    else setLoginFormVisible(true)
  }, [])

  return (
    <WhatDoYouThinkContainer>
      <LexicalComposer initialConfig={initialConfig}>
        <Dialog header="Create Comment" visible={visible} onHide={() => setVisible(false)}>
          <CreateCommentForm
            commentFormState={commentFormState}
            closeModal={() => setVisible(false)}
          />
        </Dialog>
      </LexicalComposer>
      <ExpandButton onClick={handleClick}>
        What Do You Think?
      </ExpandButton>

    </WhatDoYouThinkContainer>
  )
}

export default memo(WhatDoYouThink)
