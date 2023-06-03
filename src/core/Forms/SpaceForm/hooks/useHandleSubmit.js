import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useCreateSpaceMutation } from '../../../../api/services/spaces.ts'
import { uploadSpaceMedia } from '../../../../api/v1/spaces/spaces_api_util'

import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'

import checkLinkType from '../../hooks/checkLinkType'
import useGetLexicalTextContent from '../../hooks/useGetLexicalTextContent'
import useUploadRichTextImages from './useUploadRichTextImages.ts'

export default (metaData, closeModal, editor) => {
  const [createSpace, { isLoading }] = useCreateSpaceMutation()
  const { currentUser } = useGetCurrentUser()
  const uploadRichTextImages = useUploadRichTextImages(uploadSpaceMedia)
  const editorTextContent = useGetLexicalTextContent(editor)
  return useCallback(async (values, { setSubmitting, resetForm }, externalContentUrl) => {
    if (isLoading) return
    const eLinks = Object.entries(values).map(([k, v]) => (k.includes('Evidence') ? v : null)).filter(Boolean)
    const linkType = checkLinkType(externalContentUrl?.url)
    const editorState = await uploadRichTextImages(editor)
    let userUploadedVodUrl = null
    let userUploadedImageUrl = null
    if (values.file instanceof File) {
      const [fileType, fileFormat] = values.file.type.split('/')
      const formData = new FormData()
      formData.append(fileType, values.file)
      const res = await uploadSpaceMedia(formData, fileType, fileFormat)
      const { data: urlData } = res
      if (fileType === 'image') {
        userUploadedImageUrl = urlData.imageUrl
      } else {
        userUploadedVodUrl = urlData.vodUrl
      }
    }
    console.log(values)
    const data = {
      ...values,
      userUploadedVodUrl,
      userUploadedImageUrl,
      editorState: JSON.stringify(editorState),
      createdByUsername: currentUser.username,
      createdByuserId: currentUser.userId,
      referenceLinks: eLinks,
      editorTextContent: editorTextContent.replace(/\n/g, ' '),
      category: values.category.name,
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
