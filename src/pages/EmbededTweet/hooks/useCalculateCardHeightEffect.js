import { useEffect, useState } from 'react'

export default (tweetRef, showLinks, isOpen) => {
  const [height, setHeight] = useState('20vw')
  const heightOffet = isOpen ? 7 : 0
  useEffect(() => {
    if (tweetRef.current) {
      window.twttr.widgets?.load(tweetRef.current)
      const int = setInterval(() => {
        const tweetFrame = tweetRef?.current?.querySelector('iframe')
        if (tweetFrame) {
          const compStyles = window.getComputedStyle(tweetFrame)
          const heightComp = compStyles.getPropertyValue('height')
          if (heightComp !== '0px') {
            setHeight(`${Number(heightComp.slice(0, heightComp.length - 2)) + Math.ceil((window.innerWidth * ((12 + heightOffet) / 100)))}px`)
            clearInterval(int)
          }
        }
      }, 200)
    }
  }, [tweetRef, isOpen])

  return height
}
