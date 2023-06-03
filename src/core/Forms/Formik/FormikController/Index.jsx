import React from 'react'
import Input from '../PrimeInput/PrimeInput'
import PrimeSelect from '../PrimeSelect/PrimeSelect'

function FormikController(props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'select':
      return <PrimeSelect {...rest} />
    // case "select":
    //   return <Select {...rest} />
    // case "radio":
    //   return <RadioButtons {...rest} />
    // case "checkbox":
    //   return <CheckBoxes {...rest} />
    default:
      return null
  }
}
export default FormikController
