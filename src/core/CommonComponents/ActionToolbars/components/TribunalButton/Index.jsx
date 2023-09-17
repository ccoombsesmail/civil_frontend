import React, {
  memo, useState, useCallback, useContext,
} from 'react'

import { Dialog } from 'primereact/dialog'
import { ScalesSvg, CommunityCourtSvg } from '../../../../../svgs/svgs'
import { Menu, Container, Item } from './Style'
import ReportForm from '../../../../Forms/ReportForm/Index'
import { LoginFormVisibleStateContext } from '../../../../../LoginFormVisibleStateContext'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'

function TribunalButton({ contentId, contentType }) {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const { currentUser } = useGetCurrentUser()
  const { setLoginFormVisible } = useContext(LoginFormVisibleStateContext)

  const onCourtClick = useCallback(() => {
    setVisible(true)
    setIsOpen(false)
  }, [])

  const onScalesClick = useCallback((e) => {
    e.stopPropagation()
    if (currentUser) {
      setIsOpen((prev) => !prev)
    } else setLoginFormVisible(true)
  }, [currentUser])

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
      <ScalesSvg onClick={onScalesClick} />
    </Container>
  )
}

export default memo(TribunalButton)
