import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  border-radius: .5em;
  margin-bottom: 1em;
  min-width: 92%;
  position: relative;
  .ql-snow.ql-toolbar:after {
    display: none;
  }
  .ql-toolbar {
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
  }

  .ql-container {
    border-bottom-left-radius: .5em;
    border-bottom-right-radius: .5em;
  }

  #toolbar {
    button:after {
      display: none;
    }
  }

`

export const EmojiButton = styled('button')`
  position: relative ;
  display: flex;
  align-items: center;

  &:after {
    display: none;
  }

`

export const EmojiContainer = styled('div')` 
  position: absolute;
  background: white;
  z-index: 9999999;
  transform: translate(-90%, -90%) scale(.8);
`
