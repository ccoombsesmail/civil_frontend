import React from 'react'
import Topics from './components/Topics/TestFeed'
import UserInformationDisplay from '../../UserInformationDisplay/Index'
import {
  Left, Middle, Right, HomePageGrid,
} from '../Style'

function HomePage() {
  return (
    <HomePageGrid>
      <Left>
        <UserInformationDisplay />
      </Left>
      <Middle>
        <Topics />
      </Middle>
      <Right>
        <span>.</span>
      </Right>
    </HomePageGrid>
  )
}

export default HomePage
