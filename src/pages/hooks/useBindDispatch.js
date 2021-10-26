import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export default (...actions) => {
  const dispatch = useDispatch()
  const combinedActions = actions.reduce((acc, action) => ({ ...acc, ...action }), {})
  return bindActionCreators(combinedActions, dispatch)
}
