import React from 'react'
import { useHistory } from 'react-router'

import {
  CardItem, CardFrame, CardTitle, CardOverlay, CardContent,
} from './Style'

const TopicItem = ({ topic }) => {
  const history = useHistory()
  return (
    <CardItem
      className="card cards__item"
      onClick={() => history.push(`/topics/${topic.id}/subtopics/`)}
    >
      <CardFrame className="card__frame">
        <CardTitle className="card__title">{topic.title}</CardTitle>
        <CardOverlay className="card__overlay" />
        <CardContent className="card__content">
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
        </CardContent>
      </CardFrame>
    </CardItem>
  )
}

export default TopicItem
