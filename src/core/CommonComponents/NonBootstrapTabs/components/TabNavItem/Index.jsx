/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { TabNavContentCount, TabNavInput, TabNavLabel } from '../../Style'

const TabNavItem = ({
  id, title, activeTab, setActiveTab, contentCount, onClick
}) => {
  const handleClick = () => {
    onClick()
    setActiveTab(id)
  }

  return (
    <>
      <TabNavInput type="radio" id={`radio-${id}`} tabNum={Number(id)} checked={activeTab === id} />
      <TabNavLabel htmlFor={`radio-${id}`} onClick={handleClick} className={activeTab === id ? 'active' : ''}>
        { title }
        { contentCount ? (
          <TabNavContentCount>
            {contentCount}
          </TabNavContentCount>
        ) : null}
      </TabNavLabel>
    </>
  )
}
export default TabNavItem
