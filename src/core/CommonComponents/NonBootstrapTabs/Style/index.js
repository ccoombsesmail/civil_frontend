/* eslint-disable no-tabs */
import styled from 'styled-components'

export const TabContentContainer = styled('div')` 
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  .active {
    background-color: var(--m-form-color);

  }

`

export const TabNav = styled('nav')`
--primary-color: #185ee0;
--secondary-color: #e6eef9;
font-family: "Inter", sans-serif;
display: flex; 
position: relative;
background-color: #fff;
box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);
width: 100%;
padding: 0.75rem;

${props => props.pill && `
  border-radius: clamp(40px, 1vw, 99px);
  width: unset;
  `
}


@media (max-width: 600px) {
  border-radius: 0;
  width: 100%;
  padding: 0;
}
* {
		z-index: 2;
	}

  input[type="radio"] {
	&:checked {
		& + label {
			color: var(--primary-color);
      background-color: var(--m-form-color);
			& > .notification {
				background-color: var(--primary-color);
				color: #fff;
			}
		}
	}
}





`

export const TabNavInput = styled('input')`
  display: none;
  &:checked {
		& ~ .glider {
			transform: ${(props) => ` translateX(${props.tabNum * 100}%)`};
      @media (max-width: 500px) {
        transform: ${(props) => ` translateX(${props.tabNum * 100}%)`};
      }
		}
	}

`

export const TabNavLabel = styled('label')`
display: flex;
align-items: center;
justify-content: center;
height: 54px;
width: 200px;
font-size: clamp(12px, 1.5vw, 20px);
font-weight: bold;
border-radius: 99px; // just a high number to create pill effect
cursor: pointer;
transition: color 0.15s ease-in;
@media (max-width: 1200px) {
  width: 150px;
}
@media (max-width: 800px) {
  width: 120px;
}

@media (max-width: 600px) {
  width: 100px;
  border-radius: 0px;
}

@media (max-width: 520px) {
  width: 90px;
}

@media (max-width: 440px) {
  width: 85px;
}

@media (max-width: 390px) {
  width: 75px;
}



`

export const TabNavContentCount = styled('span')`
display: flex;
align-items: center;
justify-content: center;
width: 2.2vw;
height: 2.2vw;
margin-left: 0.75rem;
border-radius: 50%;
background-color: var(--m-form-color);
transition: 0.15s ease-in;

`

export const Glider = styled('span')` 
position: absolute;
display: flex;
height: 54px;
width: 200px;
background-color: var(--m-form-color);
z-index: 1;
border-radius: 99px;
transition: 0.25s ease-out;
@media (max-width: 1200px) {
  width: 150px;
}

@media (max-width: 800px) {
  width: 120px;
}

@media (max-width: 600px) {
  width: 100px;
  border-radius: 0;
}

@media (max-width: 520px) {
  width: 90px;

}

@media (max-width: 440px) {
  width: 85px;
}

@media (max-width: 390px) {
  width: 75px;
}




`
