import React, { useCallback, memo } from 'react'

import { useParams } from 'react-router-dom'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import useGetCommentState from './hooks/useGetCommentState'
import useModal from '../../../CommonComponents/Lexical/hooks/useModal.tsx'
import CreateCommentForm from '../../../Forms/CommentForm/Index'
import ExpandButton from '../../../CommonComponents/Buttons/ExpandButton/Index'
import { initialConfig } from '../../../CommonComponents/Lexical/App.tsx'
import { WhatDoYouThinkContainer } from './Style'

function WhatDoYouThink({ topic, comment }) {
  const { contentId } = useParams()
  const [modal, showModal] = useModal()
  const getFommentFormState = useGetCommentState(topic, comment, contentId)

  const onClick = useCallback(() => {
    const commentFormState = getFommentFormState()
    showModal('Write A Reply', (onClose) => (
      <CreateCommentForm
        closeModal={onClose}
        commentFormState={commentFormState}
      />
    ))
  }, [topic, contentId, getFommentFormState])
  return (
    <WhatDoYouThinkContainer>
      <LexicalComposer initialConfig={initialConfig}>

        {modal}
      </LexicalComposer>
      <ExpandButton onClick={onClick}>
        What Do You Think?
      </ExpandButton>

    </WhatDoYouThinkContainer>
  )
}

export default memo(WhatDoYouThink)
