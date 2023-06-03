import React from 'react'
import { Tooltip } from 'primereact/tooltip'
import { Panel } from 'primereact/panel'

export default function Overlay({
  children,
  header,
  body,
  target,
}) {
  return (
    <div className="mb-2 flex w-full justify-content-center">
      <Tooltip target={`.${target}`} event="both" position="top" style={{width: 'clamp(400px, 40vw, 600px'}}>
        <Panel header={header}>
          <p className="m-0" data-pr-tooltip="PrimeReact-Logo">
            {body}
          </p>
        </Panel>
      </Tooltip>

      {React.cloneElement(React.Children.toArray(children)[0], {
        className: target,
      })}
    </div>
  )
}
