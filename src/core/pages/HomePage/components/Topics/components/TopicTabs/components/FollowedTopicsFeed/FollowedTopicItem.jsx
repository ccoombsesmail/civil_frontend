import React from 'react'
import { useGetAllFollowedTopicsQuery, useLazyGetAllFollowedTopicsQuery } from '../../../../../../../../../api/services/topics'
import { CircleLoading } from '../../../../../../../../../svgs/spinners/CircleLoading.jsx';
import { TopicItemContext } from '../../../TopicItem/TopicItemContex.jsx';
import TopicItem from '../../../TopicItem/Index.jsx';
import useGetCurrentUser from '../../../../../../../../App/hooks/useGetCurrentUser.js';

function FollowedTopicItem({ index, style }) {
  const { data, isLoading, isUninitialized } = useGetAllFollowedTopicsQuery();
  const { currentUser } = useGetCurrentUser()

  let content
  if (isLoading || isUninitialized || !data) {
    content = <CircleLoading size={60} /> 
  } else {
    const topic = data[index]
    content = topic ? (
      <TopicItemContext.Provider value={{currentPage: Math.floor(index / 5), updateFollowedTopicsQuery: true}}>
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

export default FollowedTopicItem