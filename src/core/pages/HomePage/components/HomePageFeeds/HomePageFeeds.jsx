import React from 'react'

import { Button } from 'primereact/button'
import Header from './components/Header/Index'
import { Container, BorderContainer } from './Style'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import FeedTabs from './components/FeedTabs/Index'

function HomePageFeeds({ setIsOpen, isOpen }) {
  const { currentUser } = useGetCurrentUser()

  return (
    <Container className="sm:w-full md:w-full">
      <BorderContainer className="sm:w-full  md:w-full">
        <Button
          size="small"
          icon={`pi ${isOpen ? 'pi-arrow-left' : 'pi-arrow-right'}`}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-0 top-0 -translate-x-100 focus:shadow-none  border-noround-right"
        />
        <Header user={currentUser} />
        <FeedTabs />
      </BorderContainer>
    </Container>
  )
}

export default HomePageFeeds
