import React from 'react'
import { FloatingQuoteBox, TextContainer } from './Style'

const QuoteBox = ({ children }) => (
  <FloatingQuoteBox>
    {children}
  </FloatingQuoteBox>
)

const QuoteText = ({ children }) => (
  <TextContainer>
    {children}
  </TextContainer>
)

QuoteBox.QuoteText = QuoteText

export default QuoteBox
