import styled from 'styled-components'

export const Search = styled('div')`
  --search-bar-height: 38px;
  z-index: 9999999999999;
  position: relative;
  max-width: 450px;
  flex: 50%;
  @media only screen and (max-width: 800px) {
    flex: 70%;
  }
  input {
    border: 1px solid lightgray;
    background: none;
    font-size: 18px;
    padding: 0 15px;
    height: var(--search-bar-height);
    width: 100%;
    border-left: none;
    border-right: none;


  }

  input:focus {
    outline: none;
  }



`

export const InnerSearch = styled('div')` 
  border-radius: 10px;
  display: flex;

  #clearBtn {
    cursor: pointer;
  }

`

export const SearchTypeBox = styled('div')` 
  display: flex;
  align-items: center;
  color: black;
  border-radius: 10px;
  border: 1px solid lightgray;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: var(--search-bar-height);

  span {
    background-color: gray;
    border: var(--thin-border);
    padding: 0 5px;
    cursor: pointer;
    height: var(--search-bar-height);
    display: flex;
    align-items: center;
  }

  span:first-child {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    background-color: ${(props) => (props.filterType === 'Content' ? '#eee' : 'white')};
  }

  span:last-child {
    background-color: ${(props) => (props.filterType === 'People' ? '#eee' : 'white')};
    border-right: none;
  }





  svg {
    width: 24px;
    height: 24px;
  }
`

export const SearchIcon = styled('div')` 
  display: grid;
  place-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: var(--search-bar-height);


  svg {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }


`

export const ResultContainer = styled('div')` 
  top: 40px;
  position: absolute;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 70vh;
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
  display: none;
  }

  a:nth-child(1) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

  }
  a:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

`

export const DataItem = styled('div')` 
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;

  p {
  margin-left: 10px;
}
a {
  text-decoration: none;
}

a:hover {
  background-color: lightgrey;
}

`
