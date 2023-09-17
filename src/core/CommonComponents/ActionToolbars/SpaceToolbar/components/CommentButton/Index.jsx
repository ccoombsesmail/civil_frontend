import React, { memo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { Dialog } from 'primereact/dialog'
import IconButton from '../../../../IconButton/Index'
import { CommentSvg } from '../../../../../../svgs/svgs'
import CreateCommentForm from '../../../../../Forms/CommentForm/Index'
import useGetSpaceCommentState from './hooks/useGetSpaceCommentState'
import { initialConfig } from '../../../../Lexical/App.tsx'

function CommentButton({ space }) {
  const [visible, setVisible] = useState(false)

  const {
    spaceId,
  } = useParams()
  const spaceCommentFormState = useGetSpaceCommentState(spaceId)

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        <Dialog header="Create Comment" visible={visible} onHide={() => setVisible(false)}>
          <CreateCommentForm
            closeModal={() => setVisible(false)}
            commentFormState={spaceCommentFormState}
            title={space?.title}
          />
        </Dialog>
      </LexicalComposer>
      { spaceCommentFormState ? <IconButton icon={<CommentSvg />} onClick={() => setVisible(true)} /> : null }

    </>
  )
}

export default memo(CommentButton)
