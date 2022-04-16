import React, {
  useState, useEffect, useRef, memo,
} from 'react'
import { Overlay, Popover } from 'react-bootstrap'

const PopoverStickOnHover = ({
  delay, onMouseEnter, children, component, placement,
}) => {
  const [showPopover, setShowPopover] = useState(false)
  const childNode = useRef(null)
  let setTimeoutConst = null

  useEffect(() => () => {
    if (setTimeoutConst) {
      clearTimeout(setTimeoutConst)
    }
  })

  const handleMouseEnter = () => {
    setTimeoutConst = setTimeout(() => {
      setShowPopover(true)
      onMouseEnter()
    }, delay)
  }

  const handleMouseLeave = () => {
    clearTimeout(setTimeoutConst)
    setShowPopover(false)
  }

  const displayChild = React.Children.map(children, (child) => React.cloneElement(child, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref: (node) => {
      childNode.current = node
      const { ref } = child
      if (typeof ref === 'function') {
        ref(node)
      }
    },
  }))[0]

  return (
    <>
      {displayChild}
      <Overlay
        show={showPopover}
        placement={placement}
        target={childNode}
        shouldUpdatePosition
      >
        <Popover
          onMouseEnter={() => {
            setShowPopover(true)
          }}
          onMouseLeave={handleMouseLeave}
          id="popover"
          className="sticky-popover"
        >
          {component}
        </Popover>
      </Overlay>
    </>
  )
}

export default memo(PopoverStickOnHover)
