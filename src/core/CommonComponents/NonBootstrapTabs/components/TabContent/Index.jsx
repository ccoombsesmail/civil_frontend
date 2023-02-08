import React from 'react'
import { TabContentContainer } from '../../Style'

function TabContent({ id, activeTab, children }) {
  return activeTab === id ? (
    <TabContentContainer className="TabContent">
      { children }
    </TabContentContainer>
  )
    : null
}

export default TabContent
