import React, { useEffect, useRef } from 'react'
import { Tooltip } from 'primereact/tooltip'
import { ConfirmPopup } from 'primereact/confirmpopup'
import { InfoIconSvg } from '../../../svgs/svgs'
import { LightButton, TooltipContent, TooltipHeader } from './Style/index'

export function ThemeIconTooltipSticky({
  Component, visible, Icon, setVisible, bgColor, grow = false, targetId, comment,
}) {
  const buttonEl = useRef(null)

  return (
    <>
      <ConfirmPopup
        target={buttonEl.current}
        visible={visible}
        onHide={() => setVisible(false)}
        message={Component}
        footer={<div className="pb-7" />}
      />
      <LightButton bgcolor={bgColor} grow={grow} className={targetId} ref={buttonEl} onClick={setVisible}>
        <Icon comment={comment} />
      </LightButton>
    </>
  )
}

function ThemeIconTooltip({
  tooltipText, tooltipHeader, Icon, onClick, bgColor, grow = false, targetId,
}) {
  return (
    <>
      <Tooltip
        pt={{
          text: {
            className: 'bg-white max-w-15rem p-0 border-round-2xl',
          },
          root: {
            className: 'border-round-2xl bg-white',
          },
        }}
        target={`.${targetId}`}
        event="both"
        position="top"
      >
        <TooltipHeader className="font-bold surface-ground">{tooltipHeader}</TooltipHeader>
        <TooltipContent>
          {tooltipText}
        </TooltipContent>
      </Tooltip>
      <LightButton bgcolor={bgColor} grow={grow} className={targetId} onClick={onClick}>
        {
        Icon ? <Icon onClick={onClick} /> : <InfoIconSvg size={22} onClick={onClick} />
      }
      </LightButton>
    </>
  )
}

export function ThemeIconTooltip2({
  tooltipText, tooltipHeader, Icon, onClick, bgColor, grow = false, targetId,
}) {
  return (
    <>
      <Tooltip
        pt={{
          text: {
            className: 'bg-white max-w-15rem p-0 border-round-2xl',
          },
          root: {
            className: 'border-round-2xl bg-none ml-2 ',
          },
        }}
        target={`.${targetId}`}
        event="both"
        position="right"
      >
        {tooltipText}
      </Tooltip>
      <div className={`${targetId} flex align-items-center`}>
        {
        Icon ? <Icon onClick={onClick} bgcolor={bgColor} grow={grow} className={targetId} /> : <InfoIconSvg size={22} onClick={onClick} />
        }

      </div>
    </>
  )
}

export default ThemeIconTooltip
