import { useEffect } from "react"

export default (ref, html) => {
   useEffect(() => {
    if (ref?.current) ref.current.innerHTML = html
  }, [ref, html])
}