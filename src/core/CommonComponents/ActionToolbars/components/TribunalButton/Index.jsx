import React, { memo, useState, useCallback } from 'react'

import { Dialog } from 'primereact/dialog'
import { ScalesSvg, CommunityCourtSvg } from '../../../../../svgs/svgs'
import { Menu, Container, Item } from './Style'
import ReportForm from '../../../../Forms/ReportForm/Index'

function TribunalButton({ contentId, contentType }) {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  const onCourtClick = useCallback(() => {
    setVisible(true)
    setIsOpen(false)
  }, [])
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Dialog header="Report Content" visible={visible} onHide={() => setVisible(false)}>
        <ReportForm closeModal={() => setVisible(false)} contentId={contentId} contentType={contentType} />
      </Dialog>
      <Menu isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <Item onClick={onCourtClick}>
          <CommunityCourtSvg />
          <span>
            Report Content To Jury
          </span>
        </Item>
      </Menu>
      <ScalesSvg onClick={(e) => {
        e.stopPropagation()
        setIsOpen((prev) => !prev)
      }}
      />
    </Container>
  )
}

export default memo(TribunalButton)
