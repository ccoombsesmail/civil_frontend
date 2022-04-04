import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useCreateRootIdentity from '../../../../DID/hooks/useCreateRootIdentity'

export default () => {
  const navigate = useNavigate()
  const createRootIdentity = useCreateRootIdentity()
  return useCallback(async (values, params) => {
    console.log(values)
    console.log(params)
    const vcProps = { ...values }
    delete vcProps.words
    const mnemonic = localStorage.getItem('mnemonic')
    await createRootIdentity(mnemonic, vcProps)
    navigate('/')
  }, [])
}
