/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import { TabView, TabPanel } from 'primereact/tabview'
import {
  Container, TableHeader,
} from './Style'
import DiscussionGridFeed from '../DiscussionsFeed/components/GridFeed/GridFeed'
import SpaceDiscussionsCardFeed from '../DiscussionsFeed/components/SpaceDiscussionsCardFeed/SpaceDiscussionsCardFeed'

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
          header="Grid View"
          pt={{
            headerAction: ({ parent }) => ({
              className: panelClassName(parent, 0),
            }),
            content: {
              className: 'w-full',
            },
          }}
        >
          <DiscussionGridFeed />
        </TabPanel>

        <TabPanel
          header="Feed"
          pt={{
            headerAction: ({ parent }) => ({
              className: panelClassName(parent, 1),
            }),
          }}
        >

          <SpaceDiscussionsCardFeed />

        </TabPanel>

      </TabView>

    </Container>
  )
}

export default DiscussionsTable
