import React from 'react'

import { Link } from 'react-router-dom'
import {
  GetVerifiedContainer,
} from './Style'
import { CivicArrow } from '../../../svgs/svgs'



function GetFaceVerified() {

  return (

    <Link to="/authenticate/civic-verify" className='w-full'>
      <GetVerifiedContainer className='w-full'>
        <CivicArrow />
        <span className='text-md'>
          Get Verified
        </span>
        <CivicArrow />
      </GetVerifiedContainer>
    </Link>
  )
}

export default GetFaceVerified