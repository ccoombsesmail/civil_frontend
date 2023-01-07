import styled from 'styled-components'
import ExpandButton from '../../../../pages/CommonComponents/Buttons/ExpandButton/Index'

export const Container = styled('div')`
 display: flex;
 align-items: center;
 justify-content: center;
 span {
    padding: 0 !important;
    font-size: .8vw !important;
  }
  b {
    margin: 0 1vw;
    color: #FFFFFF00;
    font-family: "Aventa", Sans-serif;
    font-size: 2vw;
    font-weight: 400;
    -webkit-text-stroke-width: 1px;
    stroke-width: 1px;
    -webkit-text-stroke-color: black;
    stroke: black;
  }
  @media (max-width: 1024px) {
    margin-right: 10px;
  }
`

export const IconContainer = styled('div')`
  background-color: ${(props) => props.color || 'var(--m-civic-theme-main-color)'}; 
  border-radius: 50%;
  padding: .4vw;
  width: clamp(45px, 2.5vw, 70px);
  height: clamp(45px, 2.5vw, 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const StyledExpandButton = styled(ExpandButton)`
  margin: 0;
`

export const PopoverToolTip = styled('div')`
    border: 1px solid rgba(200,200,200,0.25);
    min-width: 15vw;
    background-color: white;
    box-shadow: 0 15px 10px 0 rgb(81 82 81 / 32%);
    border-radius: 1rem;
    font-size: clamp(10px, 0.8vw, 20px);
    padding: .8vw 1.8vw;
    font-weight: bold;
    width: clamp(160px, 18vw, 340px);
`
