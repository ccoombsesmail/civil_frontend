import { useCallback } from 'react'
import { toast } from 'react-toastify'
import spaceActions from '../../../../redux/actions/spaces/index'

import useBindDispatch from '../../../hooks/redux/useBindDispatch'

import checkLinkType from '../../hooks/checkLinkType'
import { useCreateDiscussionMutation } from '../../../../api/services/discussions.ts'

export default (linkMetaData, spaceId, closeModal, editor, editorTextContent) => {
  const { uploadSpaceMedia } = useBindDispatch(spaceActions)
  const [createDiscussion] = useCreateDiscussionMutation()

  return useCallback((values, { setSubmitting, resetForm }) => {
    const eLinks = Object.entries(values).map(([k, v]) => (k.includes('Evidence') ? v : null)).filter(Boolean)
    const linkType = checkLinkType(linkMetaData?.url)
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

    }
    if (values.file instanceof File) {
      const [fileType, fileFormat] = values.file.type.split('/')
      const formData = new FormData()
      formData.append('image', values.file)
      uploadSpaceMedia(formData, fileType, fileFormat, data)
    } else {
      toast.promise(
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
    }
    setSubmitting(false)
    resetForm({})
    closeModal()
  }, [linkMetaData, spaceId, editor, editorTextContent])
}
