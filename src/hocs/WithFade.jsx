import React from 'react'
import { LongerFade } from './style'

const WithFade = ({ Component }) => (
  <LongerFade appear in>
    <div>
      <Component />
    </div>
  </LongerFade>
)

export default WithFade
