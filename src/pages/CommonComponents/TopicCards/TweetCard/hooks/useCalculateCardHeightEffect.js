import { useEffect, useState } from 'react'

export default (tweetRef) => {
  const [height, setHeight] = useState('unset')
  useEffect(() => {
    if (tweetRef.current) {
      window.twttr.widgets?.load(tweetRef.current)
      const int = setInterval(() => {
        const tweetFrame = tweetRef?.current?.querySelector('iframe')
        if (tweetFrame) {
          const compStyles = window.getComputedStyle(tweetFrame)
          const heightComp = compStyles.getPropertyValue('height')
          if (heightComp !== '0px') {
            setHeight(`${Number(heightComp.slice(0, heightComp.length - 2))}`)
            clearInterval(int)
          }
        }
      }, 200)
    }
  }, [tweetRef])

  return height
}
