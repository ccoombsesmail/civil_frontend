import { useCallback } from 'react'

export default (did) => useCallback((e) => {
  e.stopPropagation()
  window.open(`https://eid.elastos.io/did?did=did%3Aelastos%3A${did}&is_did=true`, '_blank')
}, [did])
