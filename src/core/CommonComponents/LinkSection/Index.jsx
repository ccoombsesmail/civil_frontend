import React from 'react'
import SupplementalLinks from '../SupplementalLinks/Index'
import { LinksContainer } from './Style'

const LinkSection = ({ space }) => (
  <LinksContainer>
    <SupplementalLinks links={space?.referenceLinks} type="evidence" />
  </LinksContainer>
)

export default LinkSection
