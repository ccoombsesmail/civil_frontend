import styled from "styled-components";



export const Container = styled('div')` 
  display: inline-block;
  padding: 2px 3px;
  border-radius: 20px;
  position:relative;
  border: 2px solid #95A5A6;
  label {
    text-align: center;
    font-family: sans-serif;
    display: inline-block;
    color: #95A5A6;
    position:relative;
    z-index:2;
    margin: 0;
    text-align: center;
    padding: 2px 3px;
    font-size: 15px;
  /* cursor: pointer; */
  }

  input {
  /* display: none; */
  position: absolute;
  z-index: 3;
  opacity: 0;
  cursor: pointer;

  
  }
  span {
    height: 21px;
    width: 21px;
    line-height: 21px;
    border-radius: 50%;
    background:#fff;
    display:block;
    position:absolute;
    left: 22px;
    top: 2px;
    transition:all 0.3s ease-in-out;
  }

  input[value="false"]:checked ~ span {
    background:#e74c3c;
    left:2px;
    color:#fff;
  }

  input[value="true"]:checked ~ span{
    background:#27ae60;
    left: 46px;
  }

  input[value="-1"]:checked ~ span{
    background:#95A5A6;
    left: 23px;
  }

  input[value="false"]:checked + label,.tw-toggle input[value="true"]:checked + label{
    color:#fff;
  }

  input[value="-1"]:checked + label{
   color:#fff;
  }
`






