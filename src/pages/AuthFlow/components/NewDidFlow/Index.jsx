import React, { useState } from 'react'
import { Formik } from 'formik'

import useHandleNewDidSubmit from './hooks/useHandleNewDidSubmit'
import useBackButtonOnClick from './hooks/useBackButtonOnClick'
import useConfigFormErrors from '../../../util/form_helpers/hooks/useConfigFormErrors'

import CreateMnemonic from './components/CreateMnemonic/Index'
import ValidateMnemonic from './components/ValidateMnemonic/Index'
import BasicInformation from '../BasicInformation/Index'
import Button from '../../../CommonComponents/Button/Index'

import { OuterContainer, ButtonContainer } from './Style'
import { INIT_DID_FORM_VALUES } from '../../../util/form_helpers/init_form_values'
import { useValidateMnemonic } from '../../../DID/hooks/useMnemonicHelpers'
import WithFade from '../../../../hocs/WithFade'

const SUBMIT_STEP = 2
const VALIDATIONS = {
  title: { REQUIRED: true },
  // description: { REQUIRED: true, MIN_LENGTH: 10 },
  summary: { REQUIRED: true, MIN_LENGTH: 10 },
  category: { REQUIRED: true },
}

const NewDidFlow = () => {
  const [formStep, setFormStep] = useState(0)
  const backButtonOnClick = useBackButtonOnClick(formStep, setFormStep)
  const validator = useConfigFormErrors(VALIDATIONS)
  const validateMnemonic = useValidateMnemonic()
  const handleNewDidSubmit = useHandleNewDidSubmit()
  return (
    <OuterContainer>
      <Formik
        initialValues={INIT_DID_FORM_VALUES}
        validate={validator}
        onSubmit={(values, params) => handleNewDidSubmit(values, params)}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <>
            {formStep === 0 && (
            <WithFade Component={BasicInformation} setFieldValue={setFieldValue} />
            )}
            {formStep === 1 && <WithFade Component={CreateMnemonic} />}
            {formStep === 2 && <WithFade Component={ValidateMnemonic} />}
            <ButtonContainer>
              <Button
                width="40%"
                height="2.5vw"
                type="button"
                backgroundColor="var(--m-elastos-theme)"
                onClick={backButtonOnClick}
              >
                Back
              </Button>
              {formStep !== SUBMIT_STEP && (
                <Button
                  width="40%"
                  height="2.5vw"
                  type="button"
                  backgroundColor="var(--m-elastos-theme)"
                  onClick={() => setFormStep((prev) => prev + 1)}
                >
                  Next
                </Button>
              )}
              {formStep === SUBMIT_STEP && (
                <Button
                  width="40%"
                  height="2.5vw"
                  type="submit"
                  backgroundColor="var(--m-elastos-theme)"
                  disabled={
                    isSubmitting || !validateMnemonic(values.words.join(' '))
                  }
                  onClick={() => handleNewDidSubmit(values)}
                >
                  Create Decentralized Identity
                </Button>
              )}
            </ButtonContainer>
          </>
        )}
      </Formik>
    </OuterContainer>
  )
}

export default NewDidFlow
