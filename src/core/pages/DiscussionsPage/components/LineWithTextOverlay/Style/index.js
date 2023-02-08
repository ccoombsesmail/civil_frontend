import styled from 'styled-components'

export const LineWithTextOverlayContainer = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

`

export const TextOverlay = styled('h2')`
  position: absolute;
  top: 50%;
  transform: translateY(-100%);
  background-color: white;
  z-index: 100;
`

export const VerticalLine = styled('div')`
  border-left: 3px solid gray;
  height: 20vh;
  position: relative;
  margin-bottom: 10px;
  :before {
    border: 1.2px solid gray;
    height: 25px;
    content: "";
    position: absolute;
    top: 17.8vh;
    left: -11px;
    transform:rotate(-44deg);
    -webkit-transform:rotate(-44deg);
    -moz-transform:rotate(-74deg);
    -ms-transform: rotate(-74deg);
  }
  ::after {
    border: 1px solid gray;
    height: 25px;
    content: "";
    position: absolute;
    top: 17.8vh;
    left: 5px;
    transform:rotate(12deg);
    -webkit-transform: rotate(42deg);
    -moz-transform:rotate(12deg);
    -ms-transform: rotate(12deg);
}

`
