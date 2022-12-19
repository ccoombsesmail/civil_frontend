import { useCallback } from 'react'
import { toast } from 'react-toastify'
import topicActions from '../../../../redux/actions/topics/index'

import useBindDispatch from '../../../hooks/redux/useBindDispatch'

import checkLinkType from '../../hooks/checkLinkType'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import { useCreateSubTopicMutation } from '../../../../api/services/subtopics.ts'

export default (metaData, topicId) => {
  const { uploadTopicMedia } = useBindDispatch(topicActions)
  const { currentUser } = useGetCurrentUser()
  const [createSubTopic, {}] = useCreateSubTopicMutation()

  return useCallback((values, { setSubmitting, resetForm }, content) => {
    const eLinks = Object.entries(values).map(([k, v]) => (k.includes('Evidence') ? v : null)).filter(Boolean)
    const linkType = checkLinkType(values.externalContentUrl)
    const data = {
      ...values,
      description: content,
      createdBy: currentUser.username,
      userId: currentUser.userId,
      evidenceLinks: eLinks,
      [linkType]: values.externalContentUrl,
      thumbImgUrl: metaData.ogImage?.url,
      topicId,
      tweetUrl: null,
      imageUrl: null,
      vodUrl: null,
    }
    if (values.file instanceof File) {
      const [fileType, fileFormat] = values.file.type.split('/')
      const formData = new FormData()
      formData.append('image', values.file)
      uploadTopicMedia(formData, fileType, fileFormat, data)
    } else {
      toast.promise(
        createSubTopic(data),
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
  }, [metaData, topicId])
}
