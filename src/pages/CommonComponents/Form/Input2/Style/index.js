import styled from 'styled-components'

export const Container = styled('div')`
  position: relative;
  overflow: hidden;
  margin: 1vw;
  width: 10vw;
  input {
    width: 100%;
    border: 2px solid gray;
    border-radius: .5em;
    background: none;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 12px 12px 12px 12px; 
    outline: 0;


    :focus + label {
      background: #f06d06;
      color: white;
      font-size: 70%;
      padding: 1px 6px;
      z-index: 2;
      text-transform: uppercase;
    }
    :valid {
      // Hides the label
      background: white; 
    }
    :focus {
      border-color: #f06d06;
    }
  }
  label {
    transition: // not padding
      background 0.2s,
      color 0.2s,
      top 0.2s,
      bottom 0.2s,
      right 0.2s,
      left 0.2s;
    position: absolute;
    color: #999;
    padding: 7px 6px;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  input:focus, textarea:focus {
    padding: 4px 6px 20px 6px; 
  }
  input:focus + label, textarea:focus + label {
    top: 100%;
    margin-top: -16px;
  }

`
