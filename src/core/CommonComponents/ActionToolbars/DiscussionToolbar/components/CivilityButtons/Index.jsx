import React, { memo } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import RangeSlider from '../../../../Form/RangeSlider/Index'
import PopoverStickOnHover from '../../../../PopoverStickOnHover/Index'
import IconButton from '../../../../IconButton/Index'
import { LightButton } from '../../../../Tooltip/Style/index'

function CivilityButton() {
  const popover = (
    <Popover id="popover">
      <Popover.Body>
        <RangeSlider />
      </Popover.Body>
    </Popover>
  )

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
