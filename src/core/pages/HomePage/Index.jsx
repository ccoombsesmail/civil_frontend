import React, { useState } from 'react'
import UserInformationDisplay from '../../UserInformationDisplay/Index'
import {
  Left, Middle, Right, HomePageGrid,
} from '../Style'
import HomePageFeeds from './components/HomePageFeeds/HomePageFeeds'

function HomePage() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <HomePageGrid isOpen={isOpen}>
      <Left>
        { isOpen ? <UserInformationDisplay /> : null }
      </Left>
      <Middle>
        <HomePageFeeds isOpen={isOpen} setIsOpen={setIsOpen} />
      </Middle>
      <Right>
        <span>.</span>
      </Right>
    </HomePageGrid>
  )
}

export default HomePage
