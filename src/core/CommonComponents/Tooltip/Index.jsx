import React, { useEffect, useRef } from 'react'
import { ConfirmPopup } from 'primereact/confirmpopup'
import { InfoIconSvg } from '../../../svgs/svgs'
import { LightButton, TooltipContent, TooltipHeader } from './Style/index'
import { OverlayPanel } from 'primereact/overlaypanel';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export function ThemeIconTooltipSticky({
  Component, Icon, targetId, comment, userId, iconSrc, button
}) {
  const buttonEl = useRef(null)
  const op = useRef(null);

  return (
    <>
      {button ? <Button rounded text icon={<Icon comment={comment} userId={userId} iconSrc={iconSrc} />} className={`${targetId} w-4rem p-0 m-0 h-auto`}  />
        : <Icon comment={comment} userId={userId} iconSrc={iconSrc} size="3vw" className={targetId}  />
      }
      <Tooltip pt={{
        text: {
            className: 'text-primary p-0 p-tooltip-no-bg shadow-none z-10 -ml-3 lg:ml-0'
          },
          arrow: {
            className: "hidden 2xl:block"
          }
        }} 
        target={`.${targetId}`} autoHide={false} position='bottom'>

        {Component}
      </Tooltip>
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
