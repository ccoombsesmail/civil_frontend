import React, { memo } from 'react'
import { Tooltip } from 'primereact/tooltip'

function PopoverStickOnHover({
  tooltipComponent, targetId, Component, comment, onClick,
}) {
  if (!Component) return null
  return (
    <>
      <Tooltip target={`.${targetId}`} autoHide={false} position="top">
        <div className="flex align-items-center">
          {tooltipComponent}
        </div>
      </Tooltip>
      { Component ? <Component className={targetId} comment={comment} onClick={onClick} /> : null }
    </>
  )
}

export default memo(PopoverStickOnHover)
