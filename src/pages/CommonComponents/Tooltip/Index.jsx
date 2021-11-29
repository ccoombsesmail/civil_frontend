/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import { OverlayTrigger, Popover } from 'react-bootstrap'

import { LightButton, TooltipContent } from './Style/index'

const ThemeTooltip = ({ tooltipText, tooltipHeader }) => {
  const popover = (
    <Popover id="popover">
      <Popover.Header as="h3">{tooltipHeader}</Popover.Header>
      <Popover.Body>
        <TooltipContent>
          {tooltipText}
        </TooltipContent>
      </Popover.Body>
    </Popover>
  )

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 250 }}
      overlay={popover}
    >
      <LightButton variant="light">
        <BiInfoCircle size={22} />
      </LightButton>
    </OverlayTrigger>
  )
}

export default ThemeTooltip
