import styled from 'styled-components'
import { ThemeTabNew } from '../../../../CommonComponents/Tabs/Style'

export const Container = styled('section')` 
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #F2F6FC;
`

export const StyledThemeTab = styled(ThemeTabNew)`
  .nav-item {
    margin: 0 0.3em 0 0;
  }
`
