import React, { useState } from 'react'
import { Tooltip } from 'reactstrap'

import { Container, Link } from './Style'

const domainExtractor = new RegExp(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)

const SupplementalLinks = ({ links, type }) => {
  const [tooltipsState, setTooltipsState] = useState([false, false, false])
  const toggle = (idx) => setTooltipsState(tooltipsState.map((state, i) => {
    if (idx === i) return !state
    return state
  }))

  return (
    <Container>
      {links?.map((link, idx) => {
        const linkText = link.match(domainExtractor)
        return (
          <div key={String(idx)}>
            <Link key={String(idx)} href={link} target="_blank" id={`${type}-${link.slice(0, 5)}-${idx}`}>
              {linkText[1]}
            </Link>
            <Tooltip autohide={false} placement="left" isOpen={tooltipsState[idx]} target={`${type}-${link.slice(0, 5)}-${idx}`} toggle={() => toggle(idx)}>
              {link}
            </Tooltip>
          </div>
        )
      })}
    </Container>
  )
}

export default SupplementalLinks
