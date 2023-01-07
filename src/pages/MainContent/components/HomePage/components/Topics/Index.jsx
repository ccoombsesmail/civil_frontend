import React from 'react'

import useBindDispatch from '../../../../../hooks/redux/useBindDispatch'
import uiActionCreators from '../../../../../../redux/actions/ui'

import TopicItem from './components/TopicItem/Index'
import Header from './components/Header/Index'
import WavyBackground from '../../../../../CommonComponents/WavyBackground/Index'
import { CardContainer, Container, BorderContainer } from './Style'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import { useCreateTopicMutation, useGetAllTopicsQuery } from '../../../../../../api/services/topics'
import { CircleLoading } from '../../../../../../svgs/spinners/CircleLoading'
import useGetCivicAuthHeader from '../../../../../../civic/hooks/useGetCivicAuthHeader'
import { MemoryStoredToken } from '../../../../../../civic/utils/generateCivicAuthHeader'

const Topics = () => {
  const { openModal } = useBindDispatch(uiActionCreators)
  const { currentUser } = useGetCurrentUser()

  const { data: topics, isLoading, isUninitialized } = useGetAllTopicsQuery(null, {
    skip: !currentUser,
  })
  console.log(topics)

  return (
    <>
      <Container>
        <BorderContainer>
          <Header user={currentUser} openModal={openModal} />
          { isLoading ? <CircleLoading size="30vw" noBackground /> : (
            <CardContainer>
              {
            isUninitialized ? null : topics?.map((topic) => <TopicItem key={topic.id} topic={topic} user={currentUser} />)
            }
            </CardContainer>
          )}
        </BorderContainer>
        {/* <WavyBackground color="#EF5D45" top="100%" /> */}
      </Container>
    </>
  )
}

export default Topics
