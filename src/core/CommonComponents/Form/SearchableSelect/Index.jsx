// SearchableSelect.js
import React, { useCallback } from 'react'
import SelectSearch from 'react-select-search'
import { useGetEnumsQueryState } from '../../../../api/services/enums.ts'
import 'react-select-search/style.css'

import styled from 'styled-components'

const Container = styled('div')`
  position: relative;
  margin: auto;
  font-family: 'Ubuntu', sans-serif;
  width: var(--form-input-width);
  .select-search-container {
    width: 100%;
  }

`

function SearchableSelect({
  width, field, form, placeholder, setFieldValue, setFieldTouched, value, ...props
}) {
  const { data: enums, isUninitialized } = useGetEnumsQueryState()
  const onChange = useCallback((e, setField) => {
    setFieldValue(field.name, e)
  }, [])
  return (
    <Container>
      <SelectSearch
        options={enums}
        value={value}
        onChange={onChange}
        search
        placeholder={placeholder}
      />
    </Container>
  )
}

export default SearchableSelect
