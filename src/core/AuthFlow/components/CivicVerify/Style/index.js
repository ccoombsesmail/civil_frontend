import styled from 'styled-components'
import { LongDownArrow } from '../../../../../svgs/svgs'

export const Container = styled('div')`
  display: flex;
  width:  100vw;
  background-color: #eee;
  align-items: center;
  flex-direction: column;

`

export const InnerContainer = styled('div')`
  width: 80vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20vh;
 

`

export const Intro = styled('div')`
  max-width: 700px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;

  b {
    font-weight: bold;
    color: var(--m-civic-theme-main-color);
  }

  a {
    color: var(--m-civic-theme-main-color);
    text-decoration: underline;
    margin-right: 5px;
    font-weight: 600;
  }

  h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  line-height: 1.5;
  text-align: left;
}


`

export const DescriptionList = styled('ul')` 


`

export const DescriptionItem = styled('li')`
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }


`