/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
// import { BiInfoCircle } from 'react-icons/bi'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { InfoIconSvg } from '../../../svgs/svgs'
import { LightButton, TooltipContent } from './Style/index'

export const TooltipPopover =  React.forwardRef(({ onClick, tooltipHeader, tooltipText, ...rest }, ref)  => (
  <Popover ref={ref} id="popover" {...rest}>
    <Popover.Header as="h3">{tooltipHeader}</Popover.Header>
    <Popover.Body>
      <TooltipContent>
        <span role="link" onClick={onClick}>{tooltipText}</span>
      </TooltipContent>
    </Popover.Body>
  </Popover>
))

const ThemeTooltip = ({
  tooltipText, tooltipHeader, Icon, onClick,
}) => {
  const popover = (
    <TooltipPopover
      onClick={onClick}
      tooltipText={tooltipText}
      tooltipHeader={tooltipHeader}
    />
  )
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 250 }}
      overlay={popover}
    >
      <LightButton variant="light">
        {
          Icon ? <Icon onClick={onClick} /> : <InfoIconSvg size={22} onClick={onClick} />
        }
      </LightButton>
    </OverlayTrigger>
  )
}

export default ThemeTooltip
