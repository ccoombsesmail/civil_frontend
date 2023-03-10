import React from 'react'
import UserIcon from '../../CommonComponents/UserIcon/Index'

import UsernameAndTag from '../../CommonComponents/UsernameAndTag/Index'
import useGetResultInfo from '../hooks/useGetResultInfo'
import {
  SearchItem, FlexDiv,
} from './Style'

function TextHighlighter({ filterText, textContent }) {
  // Find the index of the filterText in the textContent
  const index = textContent.indexOf(filterText)

  // If the filterText is not found, just render the textContent as is
  if (index === -1) {
    return textContent
  }

  // Build the highlighted string with the filterText in bold
  const maxLength = 90
  const start = Math.max(0, index - maxLength / 2)
  const end = Math.min(textContent.length, index + filterText.length + maxLength / 2)

  // Return the highlighted string as a React fragment
  return (
    <span>
      { `...${textContent.slice(start, index)}`}
      <b>{textContent.slice(index, index + filterText.length)}</b>
      {`${textContent.slice(index + filterText.length, end)}...`}
    </span>
  )
}

function SearchResultItem({ result, wordEntered, clearInput }) {
  const { textContent, linkToOnClick } = useGetResultInfo(result, clearInput)

  const {
    user,
  } = result
  return (
    <SearchItem onClick={linkToOnClick}>
      <FlexDiv>
        <UserIcon width="3vw" iconSrc={user.iconSrc} userId={user.userId} />
        <UsernameAndTag userTag={user.tag} userId={user.userId} usernameDisplay={user.username} />

      </FlexDiv>
      { textContent && <TextHighlighter filterText={wordEntered} textContent={textContent} /> }
    </SearchItem>
  )
}

export default SearchResultItem
