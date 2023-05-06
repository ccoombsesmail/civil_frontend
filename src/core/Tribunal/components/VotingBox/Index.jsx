import React, { memo, useMemo, useCallback } from 'react'
import { Gavel2, CastBallotSvg } from '../../../../svgs/svgs'
import ThemeButton from '../../../CommonComponents/Button/Index'
import useModal from '../../../CommonComponents/Lexical/hooks/useModal.tsx'
import VoteForm from '../../../Forms/VoteForm/Index'

import {
  VotingContainer, VotesAgainst, VotesFor, MiddleSection, VerdictContainer, VotesContainer, CoolText
} from './Style'
import ExpandButton from '../../../CommonComponents/Buttons/ExpandButton/Index'

function VotingBox({ contentId, reportStats, isFetching }) {
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
      <MiddleSection verdict={verdict}>
        { (votingTimeUp && !isFetching) && (
        <VerdictContainer>
          <CoolText>
            {/* <Gavel2 /> */}
            VERDICT
            {/* <Gavel2 /> */}
          </CoolText>
          <CoolText>
          <Gavel2 />
            ↓
          <Gavel2 />

          </CoolText>
          <CoolText verdict={verdict}>
            {verdict}
          </CoolText>

        </VerdictContainer>
        )}
        { !votingTimeUp && <CastBallotSvg /> }
        {(reportStats && !votingTimeUp) && (
        <ExpandButton onClick={onClick}>
          {hasAlreadyVoted ? 'Change Your Vote' : 'Cast Your Vote'}
        </ExpandButton>
        )}
      </MiddleSection>
      <VotesContainer>
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
      </VotesContainer>
    </VotingContainer>

  )
}

export default memo(VotingBox)
