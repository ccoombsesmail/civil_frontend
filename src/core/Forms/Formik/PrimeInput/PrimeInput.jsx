import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Field } from 'formik'
import { Message } from 'primereact/message'

function FloatingLabelInput({
  field, form, placeholder, label, isFormFieldInvalid, ...props
}) {
  return (
    <span className="p-float-label w-full">
      <InputText
        placeholder={placeholder}
        {...props}
        {...field}
        id={field.name}
        name={field.name}
        className={`${isFormFieldInvalid ? 'p-invalid w-full' : 'w-full'}`}
      />
      <label htmlFor="username" className="text-base">{label}</label>
    </span>
  )
}

function Input(props) {
  const { name, label, ...formik } = props

  const isFormFieldInvalid = () => !!(formik.touched[name] && formik.errors[name])

  const getFormErrorMessage = () => (isFormFieldInvalid(name) ? (
    <Message severity="error" text={formik.errors[name]} className="w-full" />
  ) : <small className="p-error">&nbsp;</small>)

  return (
    <div className="flex flex-column justify-content-center align-items-center w-5 mt-2 mb-2">
      <Field
        name={name}
        label={label}
        component={FloatingLabelInput}
        isFormFieldInvalid={isFormFieldInvalid(name)}
      />
      {getFormErrorMessage()}

    </div>
  )
}
export default Input
