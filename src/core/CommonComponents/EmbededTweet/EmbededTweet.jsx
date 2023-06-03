import React, {
  useRef, useCallback, useState, useEffect,
} from 'react'

let isTwitterScriptLoading = true
const WIDGET_SCRIPT_URL = 'https://platform.twitter.com/widgets.js'

export function EmbededTweet({
  loadingComponent,
  onError,
  onLoad,
  tweetID,
}) {
  const containerRef = useRef(null)

  const previousTweetIDRef = useRef('')
  const [isTweetLoading, setIsTweetLoading] = useState(false)

  const createTweet = useCallback(async () => {
    try {
      // @ts-expect-error Twitter is attached to the window.
      await window.twttr.widgets.createTweet(tweetID, containerRef.current)

      setIsTweetLoading(false)
      isTwitterScriptLoading = false

      if (onLoad) {
        onLoad()
      }
    } catch (error) {
      if (onError) {
        onError(String(error))
      }
    }
  }, [onError, onLoad, tweetID])

  useEffect(() => {
    if (tweetID !== previousTweetIDRef.current) {
      setIsTweetLoading(true)

      if (isTwitterScriptLoading) {
        const script = document.createElement('script')
        script.src = WIDGET_SCRIPT_URL
        script.async = true
        document.body?.appendChild(script)
        script.onload = createTweet
        if (onError) {
          script.onerror = onError
        }
      } else {
        createTweet()
      }

      if (previousTweetIDRef) {
        previousTweetIDRef.current = tweetID
      }
    }
  }, [createTweet, onError, tweetID])

  return (
    <>
      {isTweetLoading ? loadingComponent : null}
      <div
        style={{display: 'inline-block', width: '550px'}}
        ref={containerRef}
      />
    </>
  )
}
