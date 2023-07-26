import React, { useState, memo } from 'react'

import { useParams } from 'react-router-dom'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { Dialog } from 'primereact/dialog'
import useGetCommentState from './hooks/useGetCommentState'
import CreateCommentForm from '../../../Forms/CommentForm/Index'
import ExpandButton from '../../../CommonComponents/Buttons/ExpandButton/Index'
import { initialConfig } from '../../../CommonComponents/Lexical/App.tsx'
import { WhatDoYouThinkContainer } from './Style'

function WhatDoYouThink({ space, comment, discussion }) {
  const { contentId } = useParams()
  const commentFormState = useGetCommentState(space, comment, discussion, contentId)
  console.log(commentFormState)
  const [visible, setVisible] = useState(false)

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
      <ExpandButton onClick={() => setVisible(true)}>
        What Do You Think?
      </ExpandButton>

    </WhatDoYouThinkContainer>
  )
}

export default memo(WhatDoYouThink)
