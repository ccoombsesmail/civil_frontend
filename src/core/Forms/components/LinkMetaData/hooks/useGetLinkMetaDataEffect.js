import { useEffect, useState } from 'react'

import { getLinkMetaData } from '../../../../../api/v1/spaces/spaces_api_util'

export default (space, externalContentUrl, setDataForParentComponent, setIsLoading) => {
  const [metaData, setMetaData] = useState(null)
  useEffect(() => {
    const getMetaData = async () => {
      setMetaData(null)
      const { data } = await getLinkMetaData(space?.externalContentUrl || externalContentUrl)
      if (typeof setDataForParentComponent === 'function') setDataForParentComponent(data)
      setMetaData(data)
      if (typeof setIsLoading === 'function') setIsLoading(false)
    }
    if (space?.externalContentUrl || externalContentUrl) getMetaData()
  }, [])

  return metaData
}
