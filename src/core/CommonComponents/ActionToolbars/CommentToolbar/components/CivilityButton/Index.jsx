/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo, useState } from 'react'
import RangeSlider from '../../../../Form/RangeSlider/Index'
import useUpdateCommentCivility from './hooks/useUpdateCommentCivility'
import { ThemeIconTooltipSticky } from '../../../../Tooltip/Index'

function Icon({ comment }) {
  if (!comment || comment.civility === 0) return <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png" />
  if (comment.civility > 0) return <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake-clicked.png" />
  return <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/no-handshake-clicked.png" />
}

function CivilityButton({ comment }) {
  const updateCommentCivility = useUpdateCommentCivility(comment)
  const [visible, setVisible] = useState(false)

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
      setVisible={setVisible}
      Icon={Icon}
      comment={comment}
    />
  )
}

export default memo(CivilityButton)
