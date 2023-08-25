import React from 'react'
import { Tooltip } from 'primereact/tooltip'
import { Container, Link } from './Style'

const domainExtractor = new RegExp(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)

function TooltipComponent({ idx, linkText, link }) {
  const targetId = `tooltip-target-${idx}`
  return (
    <>
      <Tooltip target={`.${targetId}`} position="top">
        <strong>{link}</strong>
      </Tooltip>
      <Link key={String(idx)} href={link} target="_blank" className={targetId}>
        {linkText}
      </Link>
    </>
  )
}

function SupplementalLinks({ links }) {
  return (
    <Container>
      {links?.map((link, idx) => (
        <TooltipComponent key={String(idx)} linkText={link} idx={idx} link={link} />
      ))}
    </Container>
  )
}

export default SupplementalLinks
