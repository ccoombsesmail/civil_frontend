import styled from 'styled-components'


export const GetVerifiedContainer = styled('div')`
  -webkit-text-stroke-width: .5px;
  stroke-width: .5px;
  margin-top: 10px;
  border-radius: 10px;
  transition: all .5s;
  color: rgba(255,96,65, 1);
  box-shadow: var(--box-shadow-inset);
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer; 
  :hover {
    background-color: rgba(255,96,65, 1);
    background-color: var(--primary-color);
    color: white;
  }
  svg:nth-child(3) {
    transform: rotate(180deg);
  }
  svg {
    margin: 5px;
    width: 24px;
  }
`
