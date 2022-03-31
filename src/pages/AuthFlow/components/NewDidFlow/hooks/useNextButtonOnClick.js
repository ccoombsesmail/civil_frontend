import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useCreateRootIdentity from '../../../../DID/useCreateRootIdentity'

export default (formStep, setFormStep) => {
  const navigate = useNavigate()
  const createRootIdentity = useCreateRootIdentity()
  const createRootIdentityAndNav = useCallback(async () => {
    const mnemonic = localStorage.getItem('mnemonic')
    await createRootIdentity(mnemonic)
    navigate('/')
  })
  const nextAuthFlowStep = useCallback(() => {
    setFormStep((prev) => prev + 1)
  })

  return formStep === 1 ? createRootIdentityAndNav : nextAuthFlowStep
}
