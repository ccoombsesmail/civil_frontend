import React from 'react'
import { CircleLoading } from '../../../svgs/spinners/CircleLoading'
import { Container } from './Style'

function LoadingPage() {
  return (
    <Container>
      <CircleLoading size="100%" noBackground />
    </Container>
  )
}

export default LoadingPage
