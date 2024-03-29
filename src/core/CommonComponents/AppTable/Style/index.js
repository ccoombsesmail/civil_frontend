import styled from 'styled-components'

export const Table = styled('div')` 
  border-radius: 0 0 12px 12px;
  padding: 15px 15px 20px;
  display: grid;
  row-gap: 8px;
  width: 100%;
  padding-bottom: 200px;
  
`

export const ColHeader = styled('div')`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateCols || '3fr 1.9fr 1fr'};
  align-items: center;
  padding: 10px 30px 10px 10px;
  background-color: var(--highlight-text-color);
  border-radius: .5vw;
  width: 100%;

`

export const ColItem = styled('div')`
  color: white;
  font-weight: bold;
  font-size: clamp(12px, 1vw, 25px);
  text-align: center;

`

export const Row = styled('div')` 
    display: grid;
    grid-template-columns: ${(props) => props.gridTemplateCols || '3fr 2fr 1fr'};
    align-items: center;
    padding: 5px 10px;
    margin: 3px;

    height: ${(props) => props.height || '15vh'};
    border-radius: .5vw;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
    cursor: pointer;
    transition: transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98);
    background-color: #fff;
    z-index: 9999999;
    &:hover {
      /* transform: scale(1); */
      box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    }

  
  
`

export const RowItem = styled('div')` 
  /* opacity: .8; */
  font-weight: 600;
  color: #979cb0;
  font-weight: 600;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.alignItems || 'center'};
  font-size: clamp(12px, .8vw, 25px);


`
