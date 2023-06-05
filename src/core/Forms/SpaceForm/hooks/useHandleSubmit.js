import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useCreateSpaceMutation } from '../../../../api/services/spaces.ts'
import { uploadSpaceMedia } from '../../../../api/v1/spaces/spaces_api_util'

import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'

import useGetLexicalTextContent from '../../hooks/useGetLexicalTextContent'
import useUploadRichTextImages from './useUploadRichTextImages.ts'

export default (metaData, closeModal, editor) => {
  const [createSpace, { isLoading }] = useCreateSpaceMutation()
  const { currentUser } = useGetCurrentUser()
  const uploadRichTextImages = useUploadRichTextImages(uploadSpaceMedia)
  const editorTextContent = useGetLexicalTextContent(editor)
  return useCallback(async (values, { setSubmitting, resetForm }) => {
    if (isLoading) return
    const editorShell = document.getElementById('space-form-container').getElementsByClassName('editor-shell')[0]
    const style = window.getComputedStyle(editorShell)
    const { height } = style
    const eLinks = Object.entries(values).map(([k, v]) => (k.includes('Evidence') ? v : null)).filter(Boolean)
    const editorState = await uploadRichTextImages(editor)
    const data = {
      ...values,
      editorState: JSON.stringify(editorState),
      createdByUsername: currentUser.username,
      createdByuserId: currentUser.userId,
      referenceLinks: eLinks,
      editorTextContent: editorTextContent.replace(/\n/g, ' '),
      category: values.category.name,
      contentHeight: parseFloat(height),
    }

    toast.promise(
      createSpace(data),
      {
        pending: 'Creating Space...',
        success: 'Space Successfully Created!',
        error: {
          render({ data: errorData }) {
            const { response } = errorData
            const { data: responseData } = response
            return `${responseData.msg} 🤯 `
          },
        },
      },
    )

    setSubmitting(false)
    resetForm({})
    closeModal()
  }, [metaData, editor, editorTextContent])
}
