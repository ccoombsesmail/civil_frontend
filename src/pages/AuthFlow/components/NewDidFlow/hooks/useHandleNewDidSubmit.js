import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useCreateRootIdentity from '../../../../DID/hooks/useCreateRootIdentity'

export default () => {
  const navigate = useNavigate()
  const createRootIdentity = useCreateRootIdentity()
  return useCallback(async (values, params) => {
    const vcProps = { ...values }
    delete vcProps.words
    const mnemonic = localStorage.getItem('original')
    if (mnemonic === values.words.join(' ')) {
      await createRootIdentity(mnemonic, vcProps)
      navigate('/')
    }
  }, [])
}
