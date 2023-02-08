import React, { memo, useState, useCallback } from 'react'

import { ScalesSvg, CommunityCourtSvg } from '../../../../../svgs/svgs'
import { Menu, Container, Item } from './Style'
import { REPORT_FORM } from '../../../../App/Modal/Index'
import useOpenModal from '../../../../hooks/useOpenModal'

const TribunalButton = ({ contentId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useOpenModal(REPORT_FORM, { contentId })
  const onCourtClick = useCallback(() => {
    openModal()
    setIsOpen(false)
  }, [openModal])
  return (
    <Container>
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
