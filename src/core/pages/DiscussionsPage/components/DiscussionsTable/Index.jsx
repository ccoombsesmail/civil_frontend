/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'

import {
  Container, TableHeader,
} from './Style'
import { Table, ColHeader, ColItem } from '../../../../CommonComponents/AppTable/Style'
import { TabNav } from '../../../../CommonComponents/NonBootstrapTabs/Style'
import TabContent from '../../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index'
import TabNavItem from '../../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index'
import DiscussionsFeed from '../DiscussionsFeed/Index'


function DiscussionsTable() {
  const [key, setKey] = useState(1)
  return (
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
      </Table>
      </TabContent>
      <TabContent id={1} activeTab={key}>
        <DiscussionsFeed feedType="asdf" />
      </TabContent>

      </Container>
  )
}

export default DiscussionsTable
