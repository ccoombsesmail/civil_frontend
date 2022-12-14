import { useEffect, useState } from 'react'

import { getLinkMetaData } from '../../../../../api/v1/topics/topics_api_util'

export default (topic, externalContentUrl, setDataForParentComponent, setIsLoading) => {
  const [metaData, setMetaData] = useState(null)
  useEffect(() => {
    const getMetaData = async () => {
      setMetaData(null)
      const { data } = await getLinkMetaData(topic?.externalContentUrl || externalContentUrl)
      if (typeof setDataForParentComponent === 'function') setDataForParentComponent(data)
      setMetaData(data)
      if (typeof setIsLoading === 'function') setIsLoading(false)
    }
    if (topic?.externalContentUrl || externalContentUrl) getMetaData()
  }, [])

  return metaData
}
