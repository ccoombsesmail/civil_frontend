/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import { TabView, TabPanel } from 'primereact/tabview'
import {
  Container, TableHeader,
} from './Style'
import { Table, ColHeader, ColItem } from '../../../../CommonComponents/AppTable/Style'
import DiscussionsFeed from '../DiscussionsFeed/Index'

function DiscussionsTable() {
  const panelClassName = (parent, index) => {
    if (parent.state.activeIndex === index) { return 'bg-primary transition-all transition-duration-1000' }
    return ''
  }
  return (
    <Container>
      <TableHeader>
        <h1>
          <span>Discussions</span>
        </h1>
      </TableHeader>

      <TabView
        className="w-full mt-6 text-xl"
        pt={{
          panelContainer: {
            className: 'p-0',
          },
        }}
      >
        <TabPanel
          header="Table View"
          pt={{
            headerAction: ({ parent }) => ({
              className: panelClassName(parent, 0),
            }),
            content: {
              className: 'w-full',
            },
          }}
        >
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

        </TabPanel>

        <TabPanel
          header="Feed"
          pt={{
            headerAction: ({ parent }) => ({
              className: panelClassName(parent, 1),
            }),
          }}
        >

          <DiscussionsFeed feedType="asdf" />

        </TabPanel>

      </TabView>

    </Container>
  )
}

export default DiscussionsTable
