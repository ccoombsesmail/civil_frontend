import { useEffect, useState } from 'react'

import { getLinkMetaData } from '../../../../../api/v1/topics/topics_api_util'

export default (topic, contentUrl, setDataForParentComponent, setIsLoading) => {
  const [metaData, setMetaData] = useState(null)
  useEffect(() => {
    console.log(topic, contentUrl)
    const getMetaData = async () => {
      setMetaData(null)
      const { data } = await getLinkMetaData(topic?.contentUrl || contentUrl)
      if (typeof setDataForParentComponent === 'function') setDataForParentComponent(data)
      setMetaData(data)
      if (typeof setIsLoading === 'function') setIsLoading(false)
    }
    if (topic?.contentUrl || contentUrl) getMetaData()
    // getLinkMetaData(topic?.contentUrl).then(({ data }) => setMetaData(data))
  }, [])

  return metaData
}
