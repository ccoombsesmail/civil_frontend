import { useEffect, useState } from 'react'

import { getLinkMetaData } from '../../../../../api/v1/topics/topics_api_util'

export default (topic) => {
  const [metaData, setMetaData] = useState(null)
  useEffect(() => {
    getLinkMetaData(topic?.contentUrl).then(({ data }) => setMetaData(data))
  }, [topic])

  return metaData
}
