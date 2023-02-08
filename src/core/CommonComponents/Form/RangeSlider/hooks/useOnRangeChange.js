/* eslint-disable max-len */
import { useCallback, useState } from 'react'

export default () => {
  const [sliderValue, setSliderValue] = useState(0)
  const onSliderChange = useCallback((e) => {
    const range = e.currentTarget
    const rangeV = document.getElementById('rangeV')
    const newValue = Number(((range.value - range.min) * 100) / (range.max - range.min))
    const newPosition = 10 - (newValue * 0.2)
    rangeV.innerHTML = `<span>${range.value}</span>`
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`
    setSliderValue(Number(range.value))
  }, [])
  return { onSliderChange, sliderValue }
}
