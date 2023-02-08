/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo, useMemo, useState } from 'react'
import RangeSlider from '../../../../Form/RangeSlider/Index'
import PopoverStickOnHover from '../../../../PopoverStickOnHover/Index'
import useUpdateCommentCivility from './hooks/useUpdateCommentCivility'

const CivilityButton = ({ comment, disabled }) => {
  const [showPopover, setShowPopover] = useState(false)
  const onClick = () => setShowPopover((prev) => !prev)
  const updateCommentCivility = useUpdateCommentCivility(comment)
  const Icon = useMemo(() => {
    if (!comment || comment.civility === 0) return <img onClick={onClick} alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png" />
    if (comment.civility > 0) return <img onClick={onClick} alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake-clicked.png" />
    return <img alt="" onClick={onClick} src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/no-handshake-clicked.png" />
  }, [comment])
  return (
    <PopoverStickOnHover
      trigger={['hover', 'click']}
      component={(
        <RangeSlider
          civility={comment.civility}
          updateCommentCivility={updateCommentCivility}
          setShowPopover={setShowPopover}
        />
    )}
      placement="top"
      onMouseEnter={() => { }}
      delay={200}
      showPopover={showPopover}
      setShowPopover={setShowPopover}
    >
      {
        Icon
      }
    </PopoverStickOnHover>

  )
}

export default memo(CivilityButton)
