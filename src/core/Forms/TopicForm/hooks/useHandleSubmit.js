import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useCreateTopicMutation } from '../../../../api/services/topics.ts'
import { uploadTopicMedia } from '../../../../api/v1/topics/topics_api_util'

import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'

import checkLinkType from '../../hooks/checkLinkType'
import useGetLexicalTextContent from '../../hooks/useGetLexicalTextContent'
import useUploadRichTextImages from './useUploadRichTextImages.ts'

export default (metaData, closeModal, editor) => {
  const [createTopic, { isLoading }] = useCreateTopicMutation()
  const { currentUser } = useGetCurrentUser()
  const uploadRichTextImages = useUploadRichTextImages(uploadTopicMedia)
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
      const res = await uploadTopicMedia(formData, fileType, fileFormat)
      const { data: urlData } = res
      if (fileType === 'image') {
        userUploadedImageUrl = urlData.imageUrl
      } else {
        userUploadedVodUrl = urlData.vodUrl
      }
    }

    const data = {
      ...values,
      userUploadedVodUrl,
      userUploadedImageUrl,
      editorState: JSON.stringify(JSON.stringify(editorState)),
      createdByUsername: currentUser.username,
      createdByuserId: currentUser.userId,
      evidenceLinks: eLinks,
      externalContentData: !externalContentUrl ? null : {
        linkType,
        embedId: externalContentUrl?.id || null,
        externalContentUrl: externalContentUrl.url,
        thumbImgUrl: metaData?.ogImage?.url || null,
      },
      editorTextContent: editorTextContent.replace(/\n/g, ' '),
    }

    toast.promise(
      createTopic(data),
      {
        pending: 'Creating Topic...',
        success: 'Topic Successfully Created!',
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
