import React from 'react'
import SupplementalLinks from '../SupplementalLinks/Index'
import { LinksContainer } from './Style'

function LinkSection({ space }) {
  return (
    <LinksContainer>
      <SupplementalLinks links={space?.referenceLinks} type="evidence" />
    </LinksContainer>
  )
}

export default LinkSection
