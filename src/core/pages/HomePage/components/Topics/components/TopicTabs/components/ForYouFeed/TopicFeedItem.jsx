import React from 'react'
import { useGetAllTopicsQuery } from '../../../../../../../../../api/services/topics.ts'
import { CircleLoading } from '../../../../../../../../../svgs/spinners/CircleLoading.jsx';
import { TopicItemContext } from '../../../TopicItem/TopicItemContex.jsx';
import TopicItem from '../../../TopicItem/Index.jsx';
import useGetCurrentUser from '../../../../../../../../App/hooks/useGetCurrentUser.js';


function TopicFeedItem({ index, style }) {
  const { data, isLoading, isUninitialized } = useGetAllTopicsQuery(Math.floor(index / 5));
  const { currentUser } = useGetCurrentUser()
  let content
  if (isLoading || isUninitialized || !data) {
    content = <CircleLoading size={60} /> 
  } else {
    const topic = data[index%5]
    content = topic ? (
      <TopicItemContext.Provider value={{currentPage: Math.floor(index / 5)}}>
        <TopicItem
          style={style}
          key={topic.id}
          topic={topic}
          user={currentUser}
          currentPage={Math.floor(index/5)}
        />
      </TopicItemContext.Provider>

     ) : null    
  }
  return <div style={style}>{content}</div>
}

export default TopicFeedItem