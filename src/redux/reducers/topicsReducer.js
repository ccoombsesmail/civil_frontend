export const ADD_TOPIC = 'ADD_TOPIC'
export const GET_ALL_TOPICS = 'GET_ALL_TOPICS'
export const UPDATE_TOPIC_LIKES = 'UPDATE_TOPIC_LIKES'

const reducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case ADD_TOPIC:
      if (state.list.find((t) => t.id === action.payload.id)) return state
      return { ...state, list: [action.payload, ...state.list] }
    case GET_ALL_TOPICS:
      return { ...state, list: action.payload }
    case UPDATE_TOPIC_LIKES:
      const newList = state.list.map((topic) => {
        if (topic.id === action.payload.id) return { ...topic, likes: action.payload.likes, likeState: action.payload.likeState }
        return topic
      })
      return { ...state, list: newList }
    default:
      return state
  }
}

export default reducer
