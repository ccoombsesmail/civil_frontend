import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

export default (result, clearInput) => {
  const navigate = useNavigate()

  return useMemo(() => {
    const {
      topic, discussion, comment, user,
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
    } else if (comment) {
      textContent = comment?.editorTextContent
      linkToOnClick = () => {
        navigate(`home/topics/${comment.topicId}/discussions/${comment.discussionId}/comments/${comment.id}`)
        clearInput()
      }
    } else {
      linkToOnClick = () => {
        navigate(`user/${user?.userId}`)
        clearInput()
      }
    }

    return { textContent, linkToOnClick }
  }, [result])
}
