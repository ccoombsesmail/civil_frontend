import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default (formStep, setFormStep) => {
  const navigate = useNavigate()
  const backToAuthHome = useCallback(() => {
    navigate('/authenticate')
  })
  const previousAuthFlowStep = useCallback(() => {
    setFormStep((prev) => prev - 1)
  })

  return formStep === 0 ? backToAuthHome : previousAuthFlowStep
}
