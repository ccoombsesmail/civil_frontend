import styled from 'styled-components'

export const Body = styled('div')`
  transition: all 1s;
  filter: ${(props) => (props.shouldBlur ? 'blur(25px)' : 'unset')};
  pointer-events: ${(props) => (props.shouldBlur ? 'none' : 'initial')};
  width: 100%;
  background-color: white;
  transition: all 1s ease-in-out;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  .twitter-tweet {
    max-width: 90%;
  }

`

export const Description = styled('p')` 
  filter: ${(props) => (props.shouldBlur ? 'blur(25px)' : 'unset')};
  width: 100%;
  padding: 2vw 0;
  margin-bottom: 0;
  font-size: clamp(15px, 1.4vw, 22px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  color: black;
  @media only screen and (max-width: 600px) {
    font-size: 5vw;

  }
  
`
