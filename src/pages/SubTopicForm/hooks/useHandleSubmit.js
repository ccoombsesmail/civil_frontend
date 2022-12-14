import { useCallback } from 'react'
import topicActions from '../../../redux/actions/topics/index'

import useBindDispatch from '../../hooks/redux/useBindDispatch'

import checkLinkType from './checkLinkType'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'
import { useCreateSubTopicMutation } from '../../../api/services/subtopics'

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
      createSubTopic(data)
    }
    setSubmitting(false)
    resetForm({})
  }, [metaData, topicId])
}
