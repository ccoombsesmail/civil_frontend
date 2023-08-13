import { useState, useEffect, useRef } from 'react'

const useElementWidth = () => {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Function to update the width state with the current element's width
    const updateWidth = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth)
      }
    }

    // Update the width initially on load
    updateWidth()

    // Add event listener to update the width whenever the window resizes
    window.addEventListener('resize', updateWidth)

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, []) // Removed the ref, setWidth dependencies
  return [ref, width]
}

export default useElementWidth
