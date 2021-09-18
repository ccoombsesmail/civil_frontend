import styled from 'styled-components'

// radial-gradient(#1fe4f5, #3fbafe)

export const CardItem = styled('li')` 
  height: 20vw;
  width: 20vw;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  background-color: #14213d;
  background-color: white;
  color: black;
  margin: 2em;
  border-radius: .5em;
  cursor: pointer;
  /* box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3); */
    
    box-shadow:  -5px -5px 10px #5a5a5a,
             5px 5px 10px #ffffff;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    width: 50%;
    height: 100%;
    /* background-color: rgba(#ffffff, 0.1); */
    pointer-events: none;
  }
  transition: all .5s;
  :hover {
    transform: scale(1.1);
  }  

`
export const CardFrame = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const CardTitle = styled('h2')`
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`
export const CardBody = styled('div')`
  width: 100%;
`

export const TweetContainer = styled('div')`
  width: 100%;
  .twitter-tweet {
    max-width: 15vw;
    max-height: 15vw;
  }

`

export const CardOverlay = styled('div')`
 position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: rgb(252,163,17);
  background: #B9314F;
  /* background: radial-gradient(circle, rgba(252,163,17,1) 18%, rgba(255,255,255,1) 100%);  */
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(#000000, 0.2);
  transition: 0.5s;
  cursor: pointer;
  padding: 5px;

  
  &::before {
    content: "Info";
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 850;
    letter-spacing: 0.02em;
  }
  
  &:hover,
  &:focus {
    border-radius: 2.5em !important;
    bottom: 0;
    right: 0;
    width: 101%;
    height: 101%;
    box-shadow: none;
    border-radius: 0;
    /* opacity: 0.9; */
    
    &::before {
      content: none;
    }
  }
/*   
  ${CardItem}:nth-child(1) & {
    background-image: linear-gradient(45deg, #3503ad, #f7308c);
  }
  
  ${CardItem}:nth-child(2) & {
    background-image: linear-gradient(45deg, #ccff00, #09afff);
  }
  
  ${CardItem}:nth-child(3) & {
    background-image: linear-gradient(45deg, #e91e63, #ffeb3b);
  } */
`

export const CardContent = styled('div')`
  z-index: 1;
  padding: 20px;
  line-height: 1.4;
  opacity: 0;
  visibility: hidden;
  box-sizing: border-box;
  pointer-events: none;
  transition: 0s;
  
  ${CardOverlay}:hover ~ & {
    opacity: 1;
    visibility: visible;
    transition: 0.2s 0.3s;
  }
  
  h2 {
    margin: 0;
    margin-bottom: 16px;
  }
`

