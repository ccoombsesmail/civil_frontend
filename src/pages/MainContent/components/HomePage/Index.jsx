import React from 'react'
import Topics from '../../../Topics/Index'
import UserInformationDisplay from '../../../UserInformationDisplay/Index'
import {
  Left, Middle, Right, HomePageGrid,
} from '../../Style'

const HomePage = () => {
  console.warn('Home PAge!@#!@#')
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
