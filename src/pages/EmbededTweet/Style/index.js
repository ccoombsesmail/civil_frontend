import styled from 'styled-components'
import ActionToolbar from '../../CommonComponents/ActionToolbar/Index'

export const TweetContainer = styled('div')`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  .twitter-tweet-rendered {
    margin: auto !important;
    /* width: 30vw; */
  }

`

export const StyledActionToolbar = styled(ActionToolbar)` 
  position: absolute;
  bottom: 0;
`

export const LinksContainer = styled('div')`
  width: 100%;
  margin-top: 2em;
  display: flex;
  ul:first-child {
    border-right: 1px solid gray;
  }
`

export const ExpandButton = styled('div')` 
  position: relative;
`
