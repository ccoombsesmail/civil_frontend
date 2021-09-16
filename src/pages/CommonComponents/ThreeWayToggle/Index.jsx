import React from 'react'

import { Container } from './Style'

const ThreeWayToggle = () => {

  return (
  <Container >
    <input type="radio" name="toggle" value="false" />
      <label class="toggle toggle-yes" ><i class="fa fa-times"></i></label>
    <input checked type="radio" name="toggle" value="-1" />
      <label class="toggle toggle-yes"><i class="fa fa-minus"></i></label>
    <input type="radio" name="toggle" value="true" />
      <label class="toggle toggle-yes"><i class="fa fa-check"></i></label>
    <span></span>  
  </Container>
  )
}


export default ThreeWayToggle