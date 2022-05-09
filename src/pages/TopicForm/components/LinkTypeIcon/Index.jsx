import React, { useEffect } from 'react'

import {
  OGFavicon,
} from './Style/index'
import IsLoadingHOC from '../../../../hocs/IsLoadingHOC'

const LinkTypeIcon = ({
  contentUrl, metaData, setIsLoading,
}) => {
  useEffect(() => {
    setIsLoading(true)
  }, [contentUrl])

  useEffect(() => {
    if (metaData) setIsLoading(false)
  }, [metaData])

  return (
    <OGFavicon src={metaData?.favicon} alt="" />
  )
}
export default IsLoadingHOC(LinkTypeIcon, '30px', true)
