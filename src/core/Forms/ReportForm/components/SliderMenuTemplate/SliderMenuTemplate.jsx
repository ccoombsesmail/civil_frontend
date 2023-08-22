/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Formik, Field } from 'formik'
import {
  FormContainer, ItemList, Container, Item, ItemDescription,
} from '../../Style/Index'
import { Checkbox } from '../../../../CommonComponents/Form/Checkbox/Index'

function SliderMenuItem({
  Icon, text, fieldName, className,
}) {
  return (
    <Item>
      {Icon}
      <ItemDescription>
        {text}
      </ItemDescription>
      <Field name={fieldName} showCheckmark component={Checkbox} />
    </Item>

  )
}

export default SliderMenuItem
