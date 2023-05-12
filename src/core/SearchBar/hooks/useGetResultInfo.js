import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

export default (result, clearInput) => {
  const navigate = useNavigate()

  return useMemo(() => {
    const {
      space, discussion, comment, user,
    } = result
    let textContent
    let linkToOnClick

    if (space) {
      textContent = space?.editorTextContent
      linkToOnClick = () => {
        navigate(`home/spaces/${space.id}/discussions`)
        clearInput()
      }
    } else if (discussion) {
      textContent = discussion?.editorTextContent
      linkToOnClick = () => {
        navigate(`home/spaces/${discussion.spaceId}/discussions/${discussion.id}`)
        clearInput()
      }
    } else if (comment) {
      textContent = comment?.editorTextContent
      linkToOnClick = () => {
        navigate(`home/spaces/${comment.spaceId}/discussions/${comment.discussionId}/comments/${comment.id}`)
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
