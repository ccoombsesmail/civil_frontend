import React, { memo } from 'react'

// import { BiComment } from 'react-icons/bi'
// import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

import IconButton from '../IconButton/Index'
import { Container } from './Style/index'
import { CommentSvg, LikeSvg, LikeClickedSvg } from '../../../svgs/svgs'

const ActionToolbar = ({
  hideReplyIcon, likes, liked, updateLikes, onCommentClick, updateCivility, civil,
}) => {
  const positiveCivility = (civil == null) ? 1 : -1
  const negativeCivility = (civil == null) ? -1 : 1
  const removeCivility = civil || (civil === false)

  return (
    <Container>
      <div>
        <IconButton icon={liked ? <LikeClickedSvg color="#F44336" /> : <LikeSvg />} onClick={updateLikes} />
        { !hideReplyIcon && <IconButton icon={<CommentSvg />} onClick={onCommentClick} /> }
        <IconButton
          disabled={civil === false}
          icon={civil ? <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake-clicked.png" /> : <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png" />}
          onClick={() => updateCivility(positiveCivility, removeCivility)}
        />
        <IconButton
          disabled={civil}
          icon={civil === false ? <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/no-handshake-clicked.png" /> : <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/no-handshake.png" />}
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
