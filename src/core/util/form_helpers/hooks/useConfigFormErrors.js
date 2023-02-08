import { useCallback } from 'react'
import ERROR_MESSAGES from '../error_messages'

const validateRequired = (options) => (!options.value
  ? ERROR_MESSAGES.REQUIRED(options.field) : null)

const validateMinLength = (options) => (options.value && options.value.length < options.errorValue
  ? ERROR_MESSAGES.MIN_LENGTH(options.errorValue) : null)

const VALIDATORS = new Map([
  ['REQUIRED', validateRequired],
  ['MIN_LENGTH', validateMinLength],

])

const getErrorMessage = (field, errorKeys, val) => {
  let errorMessage = null
  Object.entries(errorKeys).forEach(([errorKey, errorValue]) => {
    const currErrorMessage = VALIDATORS.get(errorKey)({ field, value: val, errorValue })
    if (currErrorMessage) errorMessage = currErrorMessage
  })
  return errorMessage
}

export default (ERRORS) => useCallback((values) => {
  const errors = Object.entries(ERRORS).reduce((acc, [field, errorKeys]) => {
    acc[field] = getErrorMessage(field, errorKeys, values[field])
    return acc
  }, {})
  return Object.fromEntries(Object.entries(errors).filter(([, v]) => v != null))
}, [])
