import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import delay from '../../../generic/delay'

import topicActions from '../../../redux/actions/topics/index'
import useBindDispatch from '../../hooks/redux/useBindDispatch'

import checkLinkType from './checkLinkType'

// const resolveAfter1500ms = new Promise((resolve) => setTimeout(resolve, 1500))

export default (metaData) => {
  const { createTopic, uploadTopicMedia } = useBindDispatch(topicActions)
  const user = useSelector((s) => s.session.currentUser)

  return useCallback((values, { setSubmitting, resetForm }, content) => {
    const eLinks = Object.entries(values).map(([k, v]) => (k.includes('Evidence') ? v : null)).filter(Boolean)
    const linkType = checkLinkType(values.contentUrl)
    const data = {
      ...values,
      description: content,
      createdBy: user.username,
      userId: user.id,
      evidenceLinks: eLinks,
      [linkType]: values.contentUrl,
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
