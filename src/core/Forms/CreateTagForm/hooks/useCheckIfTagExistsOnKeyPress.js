import { useCallback, useState } from 'react'
import { useLazyCheckIfTagExistsQuery } from '../../../../api/services/users.ts'

export default () => {
  const [isValid, setIsValid] = useState(null)
  const [trigger, result] = useLazyCheckIfTagExistsQuery()
  const checkIfTagExistsOnKeyPress = useCallback(async (e) => {
    await trigger(e.target.value)
    const { tagExists } = result.data
    if (!e.target.value) setIsValid(null)
    else setIsValid(!tagExists)
  }, [isValid, result])

  return { isValid, checkIfTagExistsOnKeyPress }
}
