/* eslint-disable no-param-reassign */
export const findParentComment = (rootComment, payload, comment) => {
  const { children } = comment
  if (payload.parentId === comment.data.id) {
    comment.children = [...children, { data: payload, children: [] }]
    return
  }
  for (let i = 0; i < children.length; i += 1) {
    findParentComment(rootComment, payload, comment.children[i])
  }
}

export const findComment = (payload, comment) => {
  const { children } = comment
  if (payload.commentId === comment.data.id) {
    comment.data = { ...comment.data, ...payload }
    return
  }
  for (let i = 0; i < children.length; i += 1) {
    findComment(payload, children[i])
  }
}
