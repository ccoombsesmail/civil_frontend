import React, { memo, useState, useCallback } from 'react'

import { ScalesSvg, CommunityCourtSvg } from '../../../../../svgs/svgs'
import { Menu, Container, Item } from './Style'
import useModal from '../../../Lexical/hooks/useModal.tsx'
import ReportForm from '../../../../Forms/ReportForm/Index'

function TribunalButton({ contentId }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modal, showModal] = useModal()
  const openModal = useCallback(() => {
    showModal('Report Content', (onClose) => (
      <ReportForm closeModal={onClose} contentId={contentId} />
    ))
  }, [contentId])
  const onCourtClick = useCallback(() => {
    openModal()
    setIsOpen(false)
  }, [openModal])
  return (
    <Container>
      {modal}
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
