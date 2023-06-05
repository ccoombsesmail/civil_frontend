import React from 'react'
import { TabContentContainer } from '../../Style'

function TabContent({
  id, activeTab, children, styles,
}) {
  return activeTab === id ? (
    <TabContentContainer className={`TabContent ${styles}`}>
      { children }
    </TabContentContainer>
  )
    : null
}

export default TabContent
