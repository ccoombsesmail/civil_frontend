import styled from 'styled-components'

export const Word = styled('li')`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-weight: bold;
  color: white;
  width: 11vw;
  height: 8vh;
  padding: 1vw .5vw;
  margin: .5vw;
  border-radius: .5em;
  border: none;
  background-color: var(--bg-accent);

  &[data-selected='true'] {
      position: absolute;
      background: rgba(133, 48, 241, 0.45);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(133, 48, 241, 1);
    }

`
