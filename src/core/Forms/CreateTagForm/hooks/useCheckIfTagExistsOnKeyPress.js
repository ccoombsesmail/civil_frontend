import { useCallback, useState } from 'react'
import { useLazyCheckIfTagExistsQuery } from '../../../../api/services/users.ts'

export default () => {
  const [isValid, setIsValid] = useState(null)
  const [trigger, result] = useLazyCheckIfTagExistsQuery()
  const checkIfTagExistsOnKeyPress = useCallback(async (e, setFieldError) => {
    await trigger(e.target.value)
    console.log(result)
    const { tagExists } = result.data
    if (!e.target.value) setIsValid(null)
    else setIsValid(!tagExists)
    if (tagExists) setFieldError('tag', 'Tag Already Exists')
  }, [isValid, result])

  return { isValid, checkIfTagExistsOnKeyPress }
}
