import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {BiLike, BiComment} from 'react-icons/bi'
import {AiFillLike, AiOutlineLike} from 'react-icons/ai'

import IconButton from '../IconButton/Index'
import {Container} from './Style/index'


const ActionToolbar = ({ likes, liked, updateLikes, onCommentClick }) => {

  return (
    <Container>
      <div> 
        <IconButton icon={liked ? <AiFillLike color="#F44336" /> : <AiOutlineLike /> } onClick={updateLikes} /> 
        <IconButton icon={<BiComment />} onClick={onCommentClick} />
        <IconButton icon={ <img src="/assets/handshake.png" />} />
      </div>
      <div>
        <span>{likes || 0} likes</span>
      </div>
    </Container>
  )

}

export default ActionToolbar