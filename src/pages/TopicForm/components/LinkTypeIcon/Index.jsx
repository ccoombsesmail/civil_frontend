import React, { useEffect } from 'react'

import {
  OGFavicon,
} from './Style/index'
import IsLoadingHOC from '../../../../hocs/IsLoadingHOC'

const LinkTypeIcon = ({
  externalContentUrl, metaData, setIsLoading,
}) => {
  useEffect(() => {
    setIsLoading(true)
  }, [externalContentUrl])

  useEffect(() => {
    if (metaData) setIsLoading(false)
  }, [metaData])

  return (
    <OGFavicon src={metaData?.favicon} alt="" />
  )
}
export default IsLoadingHOC(LinkTypeIcon, '30px', true)
