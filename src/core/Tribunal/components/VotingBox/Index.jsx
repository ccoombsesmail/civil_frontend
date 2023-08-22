import React, {
  memo, useMemo, useState,
} from 'react'
import { Dialog } from 'primereact/dialog'
import { Message } from 'primereact/message'
import { Gavel2, CastBallotSvg } from '../../../../svgs/svgs'
import VoteForm from '../../../Forms/VoteForm/Index'

import {
  VotingContainer, VotesAgainst, VotesFor, MiddleSection, VotesContainer,
} from './Style'
import ExpandButton from '../../../CommonComponents/Buttons/ExpandButton/Index'

function VotingBox({ contentId, reportStats, isFetching }) {
  const [visible, setVisible] = useState(false)
  const votingTimeUp = (+new Date(reportStats?.reportPeriodEnd) - +new Date()) <= 0
  const hasAlreadyVoted = useMemo(
    () => (reportStats.votedToStrike || reportStats.votedToAcquit),
    [reportStats.votedToStrike, reportStats.votedToAcquit],
  )

  const { isPassing, isViolation} = useMemo(() => {
    if (reportStats.numVotesToStrike >= reportStats.numVotesToAcquit) return { isViolation: true }
    if (reportStats.numVotesToStrike < reportStats.numVotesToAcquit) return { isPassing: true }
    return {}
  }, [reportStats.numVotesToStrike, reportStats.numVotesToAcquit])
  const content = (
    <div className="flex align-items-center">
      <Gavel2 />
      <div className="m-2">
        {
         isViolation && 'Content Has Been Deemed To Have Violated Community Guidlines By A Jury Of Peers'
        }
        {
          isPassing && 'Content Has Been Deemed To Have NOT violated Community Guidlines By A Jury Of Peers'
        }

      </div>
      <Gavel2 />
    </div>
  )

  return (
    <VotingContainer>
      <Dialog header="Cast Your Vote" visible={visible} onHide={() => setVisible(false)}>
        <VoteForm
          contentId={contentId}
          closeModal={() => setVisible(false)}
        />
      </Dialog>
      <MiddleSection verdict={isViolation}>
        { (votingTimeUp && !isFetching && isViolation) && (
          <Message
            style={{
              border: '1px solid red',
              borderWidth: '0 6px 0 6px',
              color: 'black',
            }}
            className="w-full justify-content-center m-3"
            severity="error"
            content={content}
          />
        )}

        { (votingTimeUp && !isFetching && isPassing) && (
        <Message
          style={{
            border: '1px solid green',
            borderWidth: '0 6px 0 6px',
            color: 'black',
          }}
          className="w-full justify-content-center m-3"
          severity="success"
          content={content}
        />
        )}

        { !votingTimeUp && <CastBallotSvg className="mt-5" /> }
        {(reportStats && !votingTimeUp) && (
        <ExpandButton onClick={() => setVisible(true)}>
          {hasAlreadyVoted ? 'Change Your Vote' : 'Cast Your Vote'}
        </ExpandButton>
        )}
      </MiddleSection>
      <VotesContainer>
        <VotesFor isViolation={isViolation}>
          Guilty Votes
          <span>
            {reportStats && (reportStats.numVotesToStrike ?? '?')}
          </span>
        </VotesFor>
        <VotesAgainst isPassing={isPassing}>
          Not Guilty Votes
          <span>
            {reportStats && (reportStats.numVotesToAcquit ?? '?')}
          </span>
        </VotesAgainst>
      </VotesContainer>
    </VotingContainer>

  )
}

export default memo(VotingBox)
