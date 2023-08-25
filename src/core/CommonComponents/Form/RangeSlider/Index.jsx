import React, { memo, useCallback } from 'react'
import { Divider } from 'primereact/divider'
import useOnRangeChange from './hooks/useOnRangeChange'

import { Range, Container } from './Style/index'

function RangeSlider({ civility, updateCommentCivility, setVisible }) {
  const { onSliderChange, sliderValue } = useOnRangeChange()
  const onTouchEndMouseUp = useCallback((e) => {
    updateCommentCivility(e)
    setVisible(false)
  })
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <h4 className="text-sm w-full font-bold flex justify-content-center">Give/Take Civility</h4>
      <Divider className="p-0 my-2" />
      <Range sliderValue={sliderValue}>
        <div className="range-value" id="rangeV" />
        <input type="range" min={-3} max={3} step={0.1} defaultValue={civility} onChange={onSliderChange} onMouseUp={onTouchEndMouseUp} onTouchEnd={onTouchEndMouseUp} />
      </Range>
      <h1 className="text-xs">
        {sliderValue < 0 && <b className="text-red-500">{`Removing ${sliderValue} Civility`}</b>}
        {sliderValue > 0 && <b className="text-green-500">{`Giving ${sliderValue} Civility`}</b>}
      </h1>
      {/* <Message>
        {sliderValue < 0 && `Removing ${sliderValue} Civility`}
        {sliderValue > 0 && `Giving +${sliderValue} Civility`}
      </Message> */}
    </Container>
  )
}

export default memo(RangeSlider)
