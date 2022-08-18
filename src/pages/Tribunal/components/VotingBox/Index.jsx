import React, { memo, useMemo } from 'react'
import { Gavel2, CastBallotSvg } from '../../../../svgs/svgs'
import { TOPIC_VOTE_FORM } from '../../../App/Modal/Index'
import ThemeButton from '../../../CommonComponents/Button/Index'
import useOpenModal from '../../../hooks/useOpenModal'
import {
  VotingContainer, VotesAgainst, VotesFor, MiddleSection,
} from './Style'

const VotingBox = ({ contentId, reportStats, votingTimeUp }) => {
  const openModal = useOpenModal(TOPIC_VOTE_FORM, { contentId })

  const hasAlreadyVoted = useMemo(() => (reportStats.voteAgainst || reportStats.voteFor),
    [reportStats.voteAgainst, reportStats.voteFor])

  const verdict = useMemo(() => {
    if (reportStats.numVotesFor > reportStats.numVotesAgainst) return 'Violation'
    return 'No Violation'
  }, [reportStats.numVotesAgainst, reportStats.numVotesFor])

  return (
    <VotingContainer>
      <VotesAgainst>
        Votes Against
        <span>
          {reportStats && (reportStats.numVotesAgainst ?? '?')}
        </span>
      </VotesAgainst>
      <VotesFor>
        Votes For
        <span>
          {reportStats && (reportStats.numVotesFor ?? '?')}
        </span>
      </VotesFor>
      <MiddleSection verdict={verdict}>
        { votingTimeUp && (
        <span>
          {`VERDICT ⭢ ${verdict}`}
          {' '}
        </span>
        )}
        { votingTimeUp ? <Gavel2 /> : <CastBallotSvg /> }
        {(reportStats && !votingTimeUp) && (
        <ThemeButton onClick={openModal}>
          {hasAlreadyVoted ? 'Change Your Vote' : 'Cast Your Vote'}
        </ThemeButton>
        )}
      </MiddleSection>
    </VotingContainer>

  )
}

export default memo(VotingBox)
