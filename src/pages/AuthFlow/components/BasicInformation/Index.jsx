import { Field } from 'formik'
import React from 'react'
import Input from '../../../CommonComponents/Form/Input/Index'
import { FieldContainer, NamesContainer } from './Style/Index'

const BasicInformation = () => {
  console.log()
  return (
    <FieldContainer>
      <NamesContainer>
        <Field type="text" name="firstName" component={Input} width="100%" placeholder="First Name" />
        <Field type="text" name="lastName" component={Input} width="100%" placeholder="Last Name" />
      </NamesContainer>
      <Field type="text" name="username" component={Input} width="100%" placeholder="Username" />

    </FieldContainer>

  )
}

export default BasicInformation
