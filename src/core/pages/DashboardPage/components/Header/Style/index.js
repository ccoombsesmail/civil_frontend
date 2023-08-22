/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { Container as Con, ButtonBackground } from '../../../../../CommonComponents/Buttons/ExpandButton/Style/index'

export const WalletContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: .4vw;
  min-width: 400px;

  .wallet-adapter-dropdown:nth-child(2) {
    margin-top: 1.5vw;
    button {
      color: black;
      background: var(--m-form-color);
      background-image: none !important;
    }
  }
 ${Con} {
    ${ButtonBackground} {
      background-image: radial-gradient(100% 100% at 100% 0,#5adaff 0,#5468ff 100%);
    }
    padding: 20px;
    margin-top: 2vw;
    svg {
      margin-right: 1vw !important;
    }
  }

`

export const Container = styled('header')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  h1 {
    color: var(--bg-accent);
    font-size: 1.4em;
    font-weight: bold;
  }
`

export const FlexDiv = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    vertical-align: center;
  }
  margin-bottom: 2vw;


`

export const UserIcon = styled('img')`  
  margin-right: 1vw;
  height: clamp(60px, 4vw, 70px);
  width: clamp(60px, 4vw, 70px);
  border-radius: 50%;
  cursor: pointer;
  :hover {
    filter: brightness(.8);
  }

`

export const UserIconEditContainer = styled('div')`
  background-color: white;
  padding: 20px;
  border-radius: .4vw;
  min-width: 400px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2vw;
  svg {
    :hover {
      filter: brightness(.8);
    }
    cursor: pointer;
  }

`
