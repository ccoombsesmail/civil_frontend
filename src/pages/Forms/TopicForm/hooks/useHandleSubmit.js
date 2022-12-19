import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useCreateTopicMutation } from '../../../../api/services/topics.ts'

import topicActions from '../../../../redux/actions/topics/index'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import useBindDispatch from '../../../hooks/redux/useBindDispatch'

import checkLinkType from '../../hooks/checkLinkType'

// const resolveAfter1500ms = new Promise((resolve) => setTimeout(resolve, 1500))

export default (metaData) => {
  const { uploadTopicMedia } = useBindDispatch(topicActions)
  const [createTopic, { isLoading }] = useCreateTopicMutation()
  const { currentUser } = useGetCurrentUser()
  return useCallback((values, { setSubmitting, resetForm }, content) => {
    if (isLoading) return
    const eLinks = Object.entries(values).map(([k, v]) => (k.includes('Evidence') ? v : null)).filter(Boolean)
    const linkType = checkLinkType(values.externalContentUrl)
    const data = {
      ...values,
      description: content,
      createdByUsername: currentUser.username,
      createdByuserId: currentUser.userId,
      evidenceLinks: eLinks,
      [linkType]: values.externalContentUrl,
      thumbImgUrl: metaData.ogImage?.url,
    }
    if (values.file instanceof File) {
      const [fileType, fileFormat] = values.file.type.split('/')
      const formData = new FormData()
      formData.append('image', values.file)
      uploadTopicMedia(formData, fileType, fileFormat, data)
    } else {
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
    }
    setSubmitting(false)
    resetForm({})
  }, [metaData])
}
