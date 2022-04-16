import React, { memo, useState } from 'react'

import { ScalesSvg, CommunityCourtSvg } from '../../../../../../svgs/svgs'
import { Menu, Container, Item } from './Style'
import { REPORT_FORM } from '../../../../../App/Modal/Index'
import useOpenModal from '../../../../../hooks/useOpenModal'

const TribunalButton = ({ topicId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useOpenModal(REPORT_FORM, { topicId })

  return (
    <Container>
      <Menu isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <Item onClick={openModal}>
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
