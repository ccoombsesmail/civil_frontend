import { useEffect, useState } from "react";


export default (tweetRef) => {
  const [height, setHeight] = useState('20vw')

  useEffect(() => {
    if (tweetRef.current) {
      window.twttr.widgets?.load(tweetRef.current)
      const int = setInterval(() => {
        const tweetFrame = tweetRef?.current?.querySelector("iframe")
        if (tweetFrame) {
          const compStyles = window.getComputedStyle(tweetFrame)
          const height = compStyles.getPropertyValue("height")
          if (height !== "0px") {
            setHeight(`${Number(height.slice(0, height.length-2)) + Math.ceil((window.innerWidth * 7.5 / 100))}px`)
            clearInterval(int)
          }
        }
      }, 200)
    }
  }, [tweetRef])

  return height
}
