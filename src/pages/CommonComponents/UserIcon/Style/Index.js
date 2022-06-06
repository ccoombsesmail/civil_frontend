import styled from 'styled-components'

export const Thumb = styled('img')`  
  width: ${(props) => props.width};
  aspect-ratio: 32 / 32;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    filter: brightness(.8);
  }

  @media only screen and (max-width: 600px) {
    width: 9vw;
    height: 9vw;
  }
  
`
