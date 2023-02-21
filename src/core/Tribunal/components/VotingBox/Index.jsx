import React, { memo, useMemo } from 'react'
import { Gavel2, CastBallotSvg } from '../../../../svgs/svgs'
import { TOPIC_VOTE_FORM } from '../../../App/Modal/Index'
import ThemeButton from '../../../CommonComponents/Button/Index'
import useOpenModal from '../../../hooks/useOpenModal'
import {
  VotingContainer, VotesAgainst, VotesFor, MiddleSection,
} from './Style'

function VotingBox({ contentId, reportStats }) {
  const openModal = useOpenModal(TOPIC_VOTE_FORM, { contentId })
  const votingTimeUp = (+new Date(reportStats?.reportPeriodEnd) - +new Date()) <= 0
  const hasAlreadyVoted = useMemo(
    () => (reportStats.voteAgainst || reportStats.voteFor),
    [reportStats.voteAgainst, reportStats.voteFor],
  )

  const verdict = useMemo(() => {
    if (reportStats.numVotesFor > reportStats.numVotesAgainst) return 'Violation'
    return 'No Violation'
  }, [reportStats.numVotesAgainst, reportStats.numVotesFor])

  return (
    <VotingContainer>
      <VotesFor>
        Violation Votes
        <span>
          {reportStats && (reportStats.numVotesFor ?? '?')}
        </span>
      </VotesFor>
      <VotesAgainst>
        No Violation Votes
        <span>
          {reportStats && (reportStats.numVotesAgainst ?? '?')}
        </span>
      </VotesAgainst>
      <MiddleSection verdict={verdict}>
        { votingTimeUp && (
        <>
          <span>
            <Gavel2 />
            VERDICT
            <Gavel2 />
          </span>
          <span>
            ↓
          </span>
          <span>
            {verdict}
          </span>

        </>
        )}
        { !votingTimeUp && <CastBallotSvg /> }
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
