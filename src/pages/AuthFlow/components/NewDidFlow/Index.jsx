import React, { useState } from 'react'
import CreateMnemonic from './components/CreateMnemonic/Index'
import ValidateMnemonic from './components/ValidateMnemonic/Index'
import useBackButtonOnClick from './hooks/useBackButtonOnClick'
import useNextButtonOnClick from './hooks/useNextButtonOnClick'
import { OuterContainer, ButtonContainer } from './Style'

const NewDidFlow = () => {
  const [formStep, setFormStep] = useState(0)
  const [validatedMnemonic, setValidatedMnemonic] = useState(false)
  const backButtonOnClick = useBackButtonOnClick(formStep, setFormStep)
  const nextButtonOnClick = useNextButtonOnClick(formStep, setFormStep)
  return (
    <OuterContainer>
      {formStep === 0 && <CreateMnemonic />}
      {formStep === 1 && <ValidateMnemonic setValidatedMnemonic={setValidatedMnemonic} />}
      <ButtonContainer>
        <button type="button" onClick={backButtonOnClick}>Back</button>
        <button disabled={formStep === 1 && !validatedMnemonic} type="button" onClick={nextButtonOnClick}>{ formStep !== 1 ? 'Next' : 'Create'}</button>
      </ButtonContainer>
    </OuterContainer>
  )
}

export default NewDidFlow
