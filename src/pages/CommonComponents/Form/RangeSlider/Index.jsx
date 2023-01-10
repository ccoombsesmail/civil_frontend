import React, { memo, useCallback } from 'react'
import useOnRangeChange from './hooks/useOnRangeChange'

import { Range, Message, Container } from './Style/index'

const RangeSlider = ({ civility, updateCommentCivility, setShowPopover }) => {
  const { onSliderChange, sliderValue } = useOnRangeChange()
  const onTouchEndMouseUp = useCallback((e) => {
    updateCommentCivility(e)
    setShowPopover()
  })
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Range sliderValue={sliderValue}>
        <div className="range-value" id="rangeV" />
        <input type="range" min={-3} max={3} step={0.1} defaultValue={civility} onChange={onSliderChange} onMouseUp={onTouchEndMouseUp} onTouchEnd={onTouchEndMouseUp} />
      </Range>
      <Message>
        {sliderValue < 0 && `Removing ${sliderValue} Civility`}
        {sliderValue > 0 && `Giving +${sliderValue} Civility`}
      </Message>
    </Container>
  )
}

export default memo(RangeSlider)
