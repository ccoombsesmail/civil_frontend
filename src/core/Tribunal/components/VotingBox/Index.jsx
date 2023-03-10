import React, { memo, useMemo, useCallback } from 'react'
import { Gavel2, CastBallotSvg } from '../../../../svgs/svgs'
import ThemeButton from '../../../CommonComponents/Button/Index'
import useModal from '../../../CommonComponents/Lexical/hooks/useModal.tsx'
import VoteForm from '../../../Forms/VoteForm/Index'

import {
  VotingContainer, VotesAgainst, VotesFor, MiddleSection,
} from './Style'

function VotingBox({ contentId, reportStats }) {
  const [modal, showModal] = useModal()
  const onClick = useCallback(() => {
    showModal('Cast Your Vote', (onClose) => (
      <VoteForm closeModal={onClose} contentId={contentId} />
    ))
  }, [])

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
      {modal}
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
        <ThemeButton onClick={onClick}>
          {hasAlreadyVoted ? 'Change Your Vote' : 'Cast Your Vote'}
        </ThemeButton>
        )}
      </MiddleSection>
    </VotingContainer>

  )
}

export default memo(VotingBox)
