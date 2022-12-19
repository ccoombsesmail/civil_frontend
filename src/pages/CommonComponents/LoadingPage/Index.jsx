import React from 'react'
import { CircleLoading } from '../../../svgs/spinners/CircleLoading'
import { Container } from './Style'

const LoadingPage = () => (
  <Container>
    <CircleLoading size="100%" noBackground />
  </Container>
)

export default LoadingPage
