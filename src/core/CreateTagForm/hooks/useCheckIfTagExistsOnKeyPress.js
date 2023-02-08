import { useCallback, useState } from 'react'
import { checkIfTagExists } from '../../../api/v1/users/users_api_util'

export default () => {
  const [isValid, setIsValid] = useState(null)
  const checkIfTagExistsOnKeyPress = useCallback(async (e) => {
    const res = await checkIfTagExists(e.target.value)
    const { tagExists } = await res.data
    if (!e.target.value) setIsValid(null)
    else setIsValid(!tagExists)
  }, [isValid])

  return { isValid, checkIfTagExistsOnKeyPress }
}
