import { useCallback } from 'react'
import { toast } from 'react-toastify'
import topicActions from '../../../../redux/actions/topics/index'

import useBindDispatch from '../../../hooks/redux/useBindDispatch'

import checkLinkType from '../../hooks/checkLinkType'
import { useCreateDiscussionMutation } from '../../../../api/services/discussions.ts'

export default (metaData, topicId, closeModal) => {
  const { uploadTopicMedia } = useBindDispatch(topicActions)
  const [createDiscussion] = useCreateDiscussionMutation()

  return useCallback((values, { setSubmitting, resetForm }, content, externalContentUrl) => {
    const eLinks = Object.entries(values).map(([k, v]) => (k.includes('Evidence') ? v : null)).filter(Boolean)
    const linkType = checkLinkType(externalContentUrl?.url)
    const data = {
      ...values,
      description: content,
      evidenceLinks: eLinks,
      topicId,
      externalContentData: !externalContentUrl ? null : {
        linkType,
        embedId: externalContentUrl?.id || null,
        externalContentUrl: externalContentUrl.url,
        thumbImgUrl: metaData?.ogImage?.url || null,
      },
    }
    if (values.file instanceof File) {
      const [fileType, fileFormat] = values.file.type.split('/')
      const formData = new FormData()
      formData.append('image', values.file)
      uploadTopicMedia(formData, fileType, fileFormat, data)
    } else {
      toast.promise(
        createDiscussion(data),
        {
          pending: 'Creating Sub-Topic...',
          success: 'Sub-Topic Successfully Created!',
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
  }, [metaData, topicId])
}
