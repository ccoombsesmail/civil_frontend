import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import topicActions from '../../../redux/actions/topics/index'
import subtopicActions from '../../../redux/actions/subtopics/index'

import useBindDispatch from '../../hooks/redux/useBindDispatch'

import checkLinkType from './checkLinkType'

export default (metaData, topicId) => {
  const { createSubTopic, uploadTopicMedia } = useBindDispatch(topicActions, subtopicActions)
  const user = useSelector((s) => s.session.currentUser)

  return useCallback((values, { setSubmitting, resetForm }, content) => {
    const eLinks = Object.entries(values).map(([k, v]) => (k.includes('Evidence') ? v : null)).filter(Boolean)
    const linkType = checkLinkType(values.contentUrl)
    const data = {
      ...values,
      description: content,
      createdBy: user.username,
      clerkId: user.id,
      evidenceLinks: eLinks,
      [linkType]: values.contentUrl,
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
