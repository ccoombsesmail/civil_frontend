import React from 'react'
import { Dropdown } from 'primereact/dropdown'
import { Message } from 'primereact/message'

function PrimeSelect(props) {
  const {
    name, label, placeholder, enums, ...formik
  } = props

  const options = enums.map((o) => ({
    name: o.name,
    code: o.value,
  }))

  const isFormFieldInvalid = () => !!(formik.errors[name])

  const getFormErrorMessage = () => (isFormFieldInvalid(name) ? (
    <Message severity="error" text={formik.errors[name]} className="w-full" />
  ) : <small className="p-error">&nbsp;</small>)
  return (
    <div className="w-5">
      <Dropdown
        filter
        showClear
        inputId={name}
        name={name}
        value={formik.values.category}
        options={options}
        optionLabel="name"
        placeholder={placeholder}
        className={`${isFormFieldInvalid(name) ? 'p-invalid w-full' : 'w-full'}`}
        onChange={(e) => {
          formik.setFieldValue(name, e.value)
        }}
      />
      {getFormErrorMessage()}
    </div>
  )
}

export default PrimeSelect
