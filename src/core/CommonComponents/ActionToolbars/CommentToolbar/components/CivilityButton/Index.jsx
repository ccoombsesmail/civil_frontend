/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo, useCallback, useContext, useState } from 'react'
import RangeSlider from '../../../../Form/RangeSlider/Index'
import useUpdateCommentCivility from './hooks/useUpdateCommentCivility'
import { ThemeIconTooltipSticky } from '../../../../Tooltip/Index'
import { LoginFormVisibleStateContext } from '../../../../../../LoginFormVisibleStateContext'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'

function Icon({ comment }) {
  if (!comment || comment.civility === 0) return <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png" />
  if (comment.civility > 0) return <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake-clicked.png" />
  return <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/no-handshake-clicked.png" />
}

function CivilityButton({ comment }) {
  const updateCommentCivility = useUpdateCommentCivility(comment)
  const [visible, setVisible] = useState(false)
  const { currentUser } = useGetCurrentUser()

  const { setLoginFormVisible } = useContext(LoginFormVisibleStateContext)
  const setTooltipVisible = useCallback(() => {
    if (currentUser) setVisible(true)
    else setLoginFormVisible(true)
  }, [currentUser])

  return (
    <ThemeIconTooltipSticky
      targetId={`civility-btn-${comment.id}`}
      tooltipHeader="Captcha Verified"
      grow="true"
      Component={(
        <RangeSlider
          civility={comment.civility}
          updateCommentCivility={updateCommentCivility}
          setVisible={setVisible}
        />
    )}
      placement="top"
      visible={visible}
      setVisible={setTooltipVisible}
      Icon={Icon}
      comment={comment}
    />
  )
}

export default memo(CivilityButton)
