import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { uploadFileToAws } from '../../../../api/v1/file_upload/file_upload_api'

import checkLinkType from '../../hooks/checkLinkType'
import { useCreateDiscussionMutation } from '../../../../api/services/discussions.ts'

const createDiscussionPromise = (createDiscussion, data) => toast.promise(
  createDiscussion(data),
  {
    pending: 'Creating New Discussion...',
    success: 'Discussion Successfully Started!',
    error: {
      render({ data: errorData }) {
        const { response } = errorData
        const { data: responseData } = response
        return `${responseData.msg} 🤯 `
      },
    },
  },
)

export default (linkMetaData, spaceId, closeModal, editor, editorTextContent) => {
  const [createDiscussion] = useCreateDiscussionMutation()

  return useCallback(async (values, { setSubmitting, resetForm }) => {
    const eLinks = Object.entries(values).map(([k, v]) => (k.includes('Evidence') ? v : null)).filter(Boolean)
    const linkType = checkLinkType(linkMetaData?.url)
    const editorShell = document.getElementById('discussion-form-container').getElementsByClassName('editor-shell')[0]
    const style = window.getComputedStyle(editorShell)
    const { height } = style
    const data = {
      ...values,
      editorState: JSON.stringify(editor.getEditorState()),
      evidenceLinks: eLinks,
      spaceId,
      externalContentData: !linkMetaData ? null : {
        linkType,
        embedId: linkMetaData?.embedId || null,
        externalContentUrl: linkMetaData.url,
        thumbImgUrl: linkMetaData?.ogImage?.url || null,
      },
      editorTextContent: editorTextContent.replace(/\n/g, ' '),
      contentHeight: parseFloat(height),
    }
    if (values.file instanceof File) {
      const [fileType, fileFormat] = values.file.type.split('/')
      const formData = new FormData()
      formData.append('image', values.file)
      uploadFileToAws(formData, fileType, fileFormat, 'discussion').then((res) => {
        createDiscussionPromise(createDiscussion, {...data, userUploadedImageUrl: res.data.imageUrl })
      })
    } else {
      createDiscussionPromise(createDiscussion, data)
    }
    setSubmitting(false)
    resetForm({})
    closeModal()
  }, [linkMetaData, spaceId, editor, editorTextContent])
}
