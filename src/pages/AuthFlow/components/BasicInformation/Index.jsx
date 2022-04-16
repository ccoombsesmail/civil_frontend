import { Field } from 'formik'
import React from 'react'
import Input3 from '../../../CommonComponents/Form/Input3/Index'
import { FieldContainer, NamesContainer } from './Style/Index'

const BasicInformation = () => {
  console.log()
  return (
    <FieldContainer>
      <NamesContainer>
        <Field
          type="text"
          name="firstName"
          label="First Name"
          component={Input3}
          width="40%"
          isDIDForm
        />
        <Field
          type="text"
          name="lastName"
          component={Input3}
          width="40%"
          placeholder="Last Name"
          label="Last Name"
          isDIDForm
        />
      </NamesContainer>
      <NamesContainer>
        <Field
          type="text"
          name="username"
          component={Input3}
          width="100%"
          label="Username"
          isDIDForm
        />
      </NamesContainer>

    </FieldContainer>

  )
}

export default BasicInformation
