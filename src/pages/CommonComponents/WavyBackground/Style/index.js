import styled from 'styled-components'

export const Container = styled('div')`
  position: fixed;
  width: 100vw;
  top: ${(props) => (props.top ? props.top : '50%')};
  z-index: -9999;
`

export const SvgContainerTop = styled('div')` 
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

export const SvgContainerBottom = styled('div')` 
  position: absolute;
  bottom: 0;
  transform: rotate(180deg) translateY(-99%) ;
  width: 100vw;
`
