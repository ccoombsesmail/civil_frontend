/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useCallback  } from 'react'
import { useParams } from 'react-router-dom'

import {
  Container, TableHeader,
} from './Style'
import { useGetAllDiscussionsQuery } from '../../../../../api/services/discussions.ts'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { useGetSpaceQuery } from '../../../../../api/services/spaces.ts'
import { Table, ColHeader, ColItem } from '../../../../CommonComponents/AppTable/Style'
import { TabNav } from '../../../../CommonComponents/NonBootstrapTabs/Style'
import TabContent from '../../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index'
import TabNavItem from '../../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index'
import DiscussionsFeed from '../DiscussionsFeed/Index'

const ITEMS_PER_PAGE = 10

function DiscussionsTable() {
  const { currentUser } = useGetCurrentUser()
  const { spaceId } = useParams()
  const [currentPage, setCurrentPage] = useState(0)
  const [allData, setAllData] = useState([])
  const [key, setKey] = useState(1);

  // const { data: discussions, isLoading: isLoadingCurrent, isUninitialized: isCurrentUninitialized } = useGetAllDiscussionsQuery({spaceId, currentPage }, {
  //   skip: !currentUser,
  // })
  // const { data: space, isLoading: isSpaceLoading, isUninitialized: isSpaceUninitialized } = useGetSpaceQuery(spaceId, {
  //   skip: !currentUser,
  // })

  // useEffect(() => {
  //   if (discussions) {
  //     setAllData([...allData, ...discussions])
  //   }
  // }, [discussions])

  // const fetchMore = useCallback(() => {
  //   Promise.resolve(setCurrentPage((prevPage) => prevPage + 1))
  // }, [])

  return (
    <>
      {/* <Line /> */}
      <Container>
        <TableHeader>
          <h1>
            <>
              <span>Discussions</span>
            </>
          </h1>
        </TableHeader>
        
        <TabNav>
        <TabNavItem
          onClick={() => setKey(0)}
          title="Table View"
          id={0}
          activeTab={key}
          setActiveTab={setKey}
        />
        <TabNavItem
          onClick={() => setKey(1)}
          title="Feed"
          id={1}
          activeTab={key}
          setActiveTab={setKey}
        />
         </TabNav>
     
    
      <TabContent id={0} activeTab={key}>
      <Table>
          <div>
            <ColHeader gridTemplateCols="1fr 2fr 1fr">
              <ColItem> Created By </ColItem>
              <ColItem> Title </ColItem>
              <ColItem> Comments </ColItem>
            </ColHeader>
          </div>
        
        <DiscussionsFeed feedType="Table" />
        {/* {
          (isCurrentUninitialized || isLoadingCurrent || allData.length === 0) ? null : (
          <InfiniteLoader
            hasNextPage={discussions.length >= ITEMS_PER_PAGE}
            isNextPageLoading={isLoadingCurrent}
            items={allData}
            loadNextPage={fetchMore}
            currentPage={currentPage}
            spaceId={spaceId}
          />
          )
          
        } */}
      </Table>
      </TabContent>
      <TabContent id={1} activeTab={key}>
        <DiscussionsFeed feedType="asdf" />
      </TabContent>

      </Container>
    </>
  )
}

export default DiscussionsTable
