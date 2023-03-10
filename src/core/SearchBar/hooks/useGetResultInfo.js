import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

export default (result, clearInput) => {
  const navigate = useNavigate()

  return useMemo(() => {
    const {
      topic, discussion, comment,
    } = result
    let textContent
    let linkToOnClick

    if (topic) {
      textContent = topic?.editorTextContent
      linkToOnClick = () => {
        navigate(`home/topics/${topic.id}/discussions`)
        clearInput()
      }
    } else if (discussion) {
      textContent = discussion?.editorTextContent
      linkToOnClick = () => {
        navigate(`home/topics/${discussion.topicId}/discussions/${discussion.id}`)
        clearInput()
      }
    } else {
      textContent = comment?.editorTextContent
      linkToOnClick = () => {
        navigate(`home/topics/${comment.topicId}/discussions/${comment.discussionId}/comments/${comment.id}`)
        clearInput()
      }
    }

    return { textContent, linkToOnClick }
  }, [result])
}
