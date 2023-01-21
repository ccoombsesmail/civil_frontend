/* eslint-disable no-nested-ternary */
import React from 'react'

import useBindDispatch from '../../../../../hooks/redux/useBindDispatch'
import uiActionCreators from '../../../../../../redux/actions/ui'

import TopicItem from './components/TopicItem/Index'
import Header from './components/Header/Index'
import { CardContainer, Container, BorderContainer } from './Style'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import { useGetAllTopicsQuery } from '../../../../../../api/services/topics.ts'
import { CircleLoading } from '../../../../../../svgs/spinners/CircleLoading'

const Topics = () => {
  const { openModal } = useBindDispatch(uiActionCreators)
  const { currentUser } = useGetCurrentUser()

  const { data: topics, isLoading, isUninitialized } = useGetAllTopicsQuery(null, {
    skip: !currentUser,
  })
  return (
    <>
      <Container>
        <BorderContainer>
          <Header user={currentUser} openModal={openModal} />
          { isLoading ? <CircleLoading size="30vw" noBackground /> : (
            <CardContainer>
              {
                isUninitialized ? null : isLoading ? <CircleLoading /> : topics?.map((topic) => <TopicItem key={topic.id} topic={topic} user={currentUser} />)
              }
            </CardContainer>
          )}
        </BorderContainer>
      </Container>
    </>
  )
}

export default Topics
