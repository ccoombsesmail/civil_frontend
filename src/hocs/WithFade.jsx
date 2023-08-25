/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { LongerFade } from './style'

function WithFade({ Component, ...rest }) {
  return (
    <LongerFade appear in>
      <div>
        <Component {...rest} />
      </div>
    </LongerFade>
  )
}

export default WithFade
