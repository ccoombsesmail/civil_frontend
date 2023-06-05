import styled from 'styled-components'

export const Thumb = styled('img')`  
  aspect-ratio: 32 / 32;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    filter: brightness(.8);
  }

  @media only screen and (max-width: 768px) {
    width: 6vw !important;

  }

  @media only screen and (max-width: 576px) {
    width: 9vw !important;
  }
  
`
