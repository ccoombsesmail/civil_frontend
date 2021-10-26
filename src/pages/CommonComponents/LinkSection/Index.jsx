import React from 'react'
import SupplementalLinks from '../SupplementalLinks/Index'
import { LinksContainer } from './Style'

const LinkSection = ({ showLinks, topic }) => {
  return (
    <LinksContainer>
      <SupplementalLinks links={topic?.evidenceLinks} type="evidence" />
    </LinksContainer>
  )
}

export default LinkSection
