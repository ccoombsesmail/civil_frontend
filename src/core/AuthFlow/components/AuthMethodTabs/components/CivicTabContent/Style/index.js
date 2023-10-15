import styled from 'styled-components'

export const StyledParagraph = styled('p')`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #333;
  margin: 20px 40px;

  text-align: justify;

  a {
    color: ${(props) => props.color};
    text-decoration: underline !important;
    font-weight: 600;
  }
`

export const BlockQuoteWrapper = styled('div')`
  display: flex;
  padding: 0 20px;
`

export const BlockQuoteStyled = styled('div')`
  position: relative;
  font-family: 'Barlow Condensed', sans-serif;
  max-width: 620px;
  margin: 80px auto;
  align-self: center;

  em {
    font-weight: 550;
  }
  a {
    color: ${(props) => props.themeColor};
  }

  h1 {
    position: relative;
    color: ${(props) => props.themeColor};
    font-size: 2.8rem;
    font-weight: normal;
    line-height: 1;
    margin: 0;
    border: 2px solid #fff;
    border: solid 2px;
    border-radius: 20px;
    border-color: ${(props) => props.themeColor};
    padding: 25px;
    &:after {
      content: '';
      position: absolute;
      border: 2px solid ${(props) => props.themeColor};
      border-radius: 0 50px 0 0;
      width: 60px;
      height: 60px;
      bottom: -60px;
      left: 49px;
      border-bottom: none;
      border-left: none;
      z-index: 3;
    }
    &:before {
      content: '';
      position: absolute;
      width: 80px;
      border: 6px solid white;
      bottom: -3px;
      left: 50px;
      z-index: 2;
    }

  }
  
  h4 {
      position: relative;
      color: #ffffff;
      font-size: 1.3rem;
      font-weight: 400;
      line-height: 1.2;
      margin: 0;
      padding-top: 15px;
      z-index: 1;
      margin-left:180px;
      padding-left:12px;
      color: black;
    }

    @media all and (min-width: 600px) {
      h1 {
        font-size: 3rem;
        line-height: 1.2;
      }
    }

`

export const StyledImg = styled('img')` 
  width: ${(props) => props.width || '45%'};
  border-radius: 1rem;
  margin: 2vw 0;
  border: 1px solid rgba(200,200,200,0.25);
  box-shadow: 0 15px 10px 0 rgb(81 82 81 / 32%);
`
export const Title = styled('h1')`
    text-align: center;
    font-weight:  700;
    color: black;
    padding: .5em 2em;
    margin: 40px;
    border-radius: 2em;
    box-shadow:  -5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff;
`

export const Container = styled('section')`

  display: flex;
  flex-direction: column;
  align-items: center;
  /* svg {
    margin: 2em 0;
  } */
  h2 {
    font-size: 25px;
    margin-bottom: 20px;
  }

`

export const TopUnorderdList = styled('ul')` 
  display: flex;
  flex-direction: column;
  list-style: inside;
  li {
    display: list-item;
    list-style-type: circle;
    margin: 0 40px;
  }
  p {
    text-align: center;
    font-weight: 600;
    
  }
  svg {
    margin: 0;
  }
`
export const AlreadyKnowContainer = styled('div')` 

  display: flex;
  align-items: center;
  padding: .7em 2.2em;
    border-radius: 2em;
    box-shadow:  -5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff;
  > svg {
    margin: 0 1vw;
    width: 2vw;
  }
  margin-bottom: 3vw;

`
