import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { Dialog } from 'primereact/dialog'
import { RightTriangleArrowFillSvg } from '../../../../../svgs/svgs'
import useGoToDiscussion from '../../hooks/useGoToDiscussion'

import DiscussionsTable from '../DiscussionsTable/Index'

import { Container, ActionItemsContainer } from './Style/index'
import { useGetGeneralDiscussionIdQuery } from '../../../../../api/services/discussions.ts'
import { useGetSpaceQuery } from '../../../../../api/services/spaces.ts'

import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import CreateDiscussionForm from '../../../../Forms/DiscussionForm/Index'
import { initialConfig } from '../../../../CommonComponents/Lexical/App.tsx'
import ExpandButton from '../../../../CommonComponents/Buttons/ExpandButton/Index'

function DiscussionsList() {
  const { spaceId } = useParams()
  const { currentUser } = useGetCurrentUser()
  const { data: space, isUninitialized } = useGetSpaceQuery(spaceId, {
    skip: !spaceId,
  })

  const {data: generalDiscussionId } = useGetGeneralDiscussionIdQuery(spaceId, {
    skip: !currentUser,
  })

  const goToDiscussion = useGoToDiscussion(generalDiscussionId?.id)

  const spaceTitle = isUninitialized ? null : space?.title

  const [visible, setVisible] = useState(false)

  return (
    <Container>
      <LexicalComposer initialConfig={initialConfig}>
        <Dialog header="Create Discussion" visible={visible} onHide={() => setVisible(false)}>
          <CreateDiscussionForm spaceTitle={spaceTitle} closeModal={() => setVisible(false)} />
        </Dialog>

      </LexicalComposer>
      <ActionItemsContainer>
        <h1>
          Browse Some
          {' '}
          <b>Discussions</b>
          {' '}
          or Start Your Own...
        </h1>
        <div style={{ display: 'flex', margin: '2em 0' }}>
          <ExpandButton type="button" onClick={() => setVisible(true)}>
            Start A Discussion +
          </ExpandButton>
          <ExpandButton type="button" onClick={goToDiscussion}>
            General Discussion
            {' '}
            <RightTriangleArrowFillSvg size={50} />
          </ExpandButton>
        </div>

      </ActionItemsContainer>

      <DiscussionsTable />
    </Container>
  )
}

export default DiscussionsList
