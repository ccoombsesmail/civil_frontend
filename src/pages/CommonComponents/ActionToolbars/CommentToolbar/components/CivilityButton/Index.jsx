import React, { memo, useMemo } from 'react'
import RangeSlider from '../../../../Form/RangeSlider/Index'
import PopoverStickOnHover from '../../../../PopoverStickOnHover/Index'
import useUpdateCommentCivility from './hooks/useUpdateCommentCivility'

const CivilityButton = ({ comment }) => {
  const updateCommentCivility = useUpdateCommentCivility(comment)
  const Icon = useMemo(() => {
    if (!comment || comment.civility === 0) return <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png" />
    if (comment.civility > 0) return <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake-clicked.png" />
    return <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/no-handshake-clicked.png" />
  }, [comment])
  return (
    <PopoverStickOnHover
      component={(
        <RangeSlider
          civility={comment.civility}
          updateCommentCivility={updateCommentCivility}
        />
    )}
      placement="top"
      onMouseEnter={() => { }}
      delay={200}
    >
      {
        Icon
      }
    </PopoverStickOnHover>

  )
}

export default memo(CivilityButton)
