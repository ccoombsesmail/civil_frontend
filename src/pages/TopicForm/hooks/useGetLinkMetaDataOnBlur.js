import { useCallback, useState } from 'react'

import { getLinkMetaData } from '../../../api/v1/topics/topics_api_util'

export default () => {
  const [metaData, setMetaData] = useState(null)
  const getLinkMetaDataOnBlur = useCallback((e) => {
    getLinkMetaData(e.currentTarget.value).then(({ data }) => {
      setMetaData(data)
    })
  }, [])

  return { metaData, getLinkMetaDataOnBlur }
}
