import React from 'react'
import Spaces from './components/Spaces/SpacesFeed'
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
        <Spaces />
      </Middle>
      <Right>
        <span>.</span>
      </Right>
    </HomePageGrid>
  )
}

export default HomePage
