import React, { memo } from 'react'
import RangeSlider from '../../../../Form/RangeSlider/Index'
import PopoverStickOnHover from '../../../../PopoverStickOnHover/Index'

function CivilityButton() {
  return (
    <PopoverStickOnHover
      component={<RangeSlider />}
      placement="top"
      onMouseEnter={() => { }}
      delay={200}
    >
      <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png" />
    </PopoverStickOnHover>
  )
}

export default memo(CivilityButton)
