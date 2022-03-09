import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import IconButton from '../IconButton/Index'
import { Container } from './Style/index'
import {
  CommentSvg, LikeSvg, LikeClickedSvg, OpposingViewsSvg,
} from '../../../svgs/svgs'
import { OPPOSING_REC_FORM } from '../../App/Modal/Index'
import useOpenModal from '../../hooks/useOpenModal'

const ActionToolbar = ({
  likes, liked, updateLikes, onCommentClick, updateCivility, civil, topicCard,
}) => {
  const positiveCivility = (civil == null) ? 1 : -1
  const negativeCivility = (civil == null) ? -1 : 1
  const removeCivility = civil || (civil === false)
  const { topicId, subTopicId, ...params } = useParams()
  const openModal = useOpenModal(OPPOSING_REC_FORM, { topicId, subTopicId })

  return (
    <Container>
      <div>
        <IconButton icon={liked ? <LikeClickedSvg color="#F44336" /> : <LikeSvg />} onClick={updateLikes} />
        { params['*'] && <IconButton icon={<CommentSvg />} onClick={onCommentClick} /> }
        {topicCard ? null : (
          <>
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
          </>
        )}
      </div>
      <div>
        <OpposingViewsSvg onClick={openModal} />
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
