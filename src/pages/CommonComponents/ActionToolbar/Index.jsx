import React, { memo } from 'react'

import { BiComment } from 'react-icons/bi'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

import IconButton from '../IconButton/Index'
import { Container } from './Style/index'

const ActionToolbar = ({
  hideReplyIcon, likes, liked, updateLikes, onCommentClick, updateCivility, civil,
}) => {
  const positiveCivility = (civil == null) ? 1 : -1
  const negativeCivility = (civil == null) ? -1 : 1
  const removeCivility = civil || (civil === false)

  return (
    <Container>
      <div>
        <IconButton icon={liked ? <AiFillLike color="#F44336" /> : <AiOutlineLike />} onClick={updateLikes} />
        { !hideReplyIcon && <IconButton icon={<BiComment />} onClick={onCommentClick} /> }
        <IconButton
          disabled={civil === false}
          icon={civil ? <img alt="" src="/assets/handshake-clicked.png" /> : <img alt="" src="/assets/handshake.png" />}
          onClick={() => updateCivility(positiveCivility, removeCivility)}
        />
        <IconButton
          disabled={civil}
          icon={civil === false ? <img alt="" src="/assets/no-handshake-clicked.png" /> : <img alt="" src="/assets/no-handshake.png" />}
          onClick={() => updateCivility(negativeCivility, removeCivility)}
        />

      </div>
      <div>
        <span>
          {likes || 0}
          {' '}
          likes
        </span>
      </div>
    </Container>
  )
}

export default memo(ActionToolbar)
