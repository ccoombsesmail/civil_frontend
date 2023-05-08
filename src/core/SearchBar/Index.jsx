/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import {
  Search, InnerSearch, SearchIcon, ResultContainer, SearchTypeBox,
} from './Style'
import {
  SearchIconSvg, CloseButton, People, CommentSvg,
} from '../../svgs/svgs'
import { useLazySearchAllQuery, useLazySearchAllUsersQuery } from '../../api/services/search.ts'
import SearchResultItem from './components/SearchResultItem'

function SearchBar({ placeholder }) {
  const [filterType, setFilterType] = useState('Content')
  const [searchAll, { data: results }] = useLazySearchAllQuery()
  const [searchAllUsers, { data: userResults }] = useLazySearchAllUsersQuery()

  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    if (filterType === 'Content') {
      searchAll(searchWord)
    } else {
      searchAllUsers(searchWord)
    }
    setWordEntered(searchWord)
  }

  const clearInput = () => {
    setWordEntered('')
  }

  return (
    <Search>
      <InnerSearch>
        <SearchTypeBox filterType={filterType}>
          <span onClick={() => setFilterType('Content')}>
            <CommentSvg />

          </span>
          <span onClick={() => setFilterType('People')}>
            <People />
          </span>
        </SearchTypeBox>
        <input
          type="text"
          placeholder={`Search ${filterType}...`}
          value={wordEntered}
          onChange={handleFilter}
        />
        <SearchIcon>
          {wordEntered !== '' ? (
            <CloseButton id="clearBtn" onClick={clearInput} />
          ) : (
            <SearchIconSvg />
          )}
        </SearchIcon>
      </InnerSearch>
      {wordEntered && (
        <ResultContainer>
          {results?.slice(0, 15).map((result, key) => (<SearchResultItem key={key} clearInput={clearInput} result={result} wordEntered={wordEntered} />)) }
          {userResults?.slice(0, 15).map((result, key) => (<SearchResultItem key={key} clearInput={clearInput} result={result} wordEntered={wordEntered} />)) }

        </ResultContainer>
      )}
    </Search>
  )
}

export default SearchBar
