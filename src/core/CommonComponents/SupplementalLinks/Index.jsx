/* eslint-disable no-useless-escape */
import React from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

import { Container, Link } from './Style'

const domainExtractor = new RegExp(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)

const TooltipComponent = ({ idx, linkText, link }) => (
  <OverlayTrigger
    placement="right"
    overlay={(
      <Tooltip>
        <strong>{link}</strong>
      </Tooltip>
      )}
  >
    <Link key={String(idx)} href={link} target="_blank">
      {linkText[1]}
    </Link>
  </OverlayTrigger>
)

const SupplementalLinks = ({ links }) => (
  <Container>
    {links?.map((link, idx) => {
      const linkText = link.match(domainExtractor)
      return (
        <TooltipComponent key={String(idx)} linkText={linkText} idx={idx} link={link} />

      )
    })}
  </Container>
)

export default SupplementalLinks
