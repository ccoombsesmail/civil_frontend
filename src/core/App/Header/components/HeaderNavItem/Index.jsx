import React, { memo, useEffect, useRef, useState } from 'react'
import { Badge } from 'primereact/badge'
import { ItemButton, IconContainer } from './Style'
import { OverlayPanel } from 'primereact/overlaypanel';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';




function HeaderNavItem({
  Icon, numUnreadNotifications, onClick, tribunal, showOverlay, setVisible
}) {
  const op = useRef(null)
  const ref = useRef(null)

  useEffect(() => {
    if (op && ref && showOverlay) {
      setTimeout(() => {
        op.current.show(null, ref.current)
      }, [1000])
    }
  }, [op, ref])

  return (
    <div className="card flex justify-content-center" style={{ zIndex: 999999999999 }} ref={ref}>
      <ItemButton onClick={onClick} className="p-overlay-badge" >
        <IconContainer >
          {
            Boolean(numUnreadNotifications) && (
              <Badge value={numUnreadNotifications} severity={tribunal ? '' : 'danger'} />
            )
          }
          <Icon size="35px" />
        </IconContainer>
      </ItemButton>
      <OverlayPanel pt={{ root: { className: 'surface-ground' } }}
        ref={op} showCloseIcon dismissable={false} >
        <span className="flex w-5rem h-5rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 welcome-list-icon" >
          <img className='w-4rem h-4rem border-circle' src="https://media.discordapp.net/attachments/1048453486456619088/1162266633000210472/C00mbsie_icon_intellecutal_white_background_minimalist_digital__62634bd6-b658-4689-a59f-519dc8d299e7.png?ex=653b5027&is=6528db27&hm=7e6f8e5718897645ad3f3f8912d5c9b789d370f64170e493d2fd6ad42a6e7c52&=&width=621&height=621" />
        </span>
        <Card title="Community Tribunal" >
          <p className='text-left'>Learn more about how community moderation works on Civil</p>
          <Button label='Tribunal System' onClick={() => {
             op.current.hide()
            setVisible(prev => !prev)
            }} />
        </Card>
      </OverlayPanel>
    </div>

  )
}

export default memo(HeaderNavItem)
