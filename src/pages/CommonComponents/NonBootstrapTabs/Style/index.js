/* eslint-disable no-tabs */
import styled from 'styled-components'

// <div class="container">
// <div class="tabs">
//   <input type="radio" id="radio-1" name="tabs" checked />
//   <label class="tab" for="radio-1">Upcoming<span class="notification">2</span></label>
//   <input type="radio" id="radio-2" name="tabs" />
//   <label class="tab" for="radio-2">Development</label>
//   <input type="radio" id="radio-3" name="tabs" />
//   <label class="tab" for="radio-3">Completed</label>
//   <span class="glider"></span>
// </div>

export const TabNav = styled('nav')`
--primary-color: #185ee0;
--secondary-color: #e6eef9;
margin-top: 1vw;
font-family: "Inter", sans-serif;
display: flex; 
position: relative;
background-color: #fff;
/* box-shadow: 0 0 1px 0 rgba(#185ee0, 0.15), 0 6px 12px 0 rgba(#185ee0, 0.15); */
box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);

padding: 0.75rem;
border-radius: 99px; // just a high number to create pill effect
* {
		z-index: 2;
	}

  input[type="radio"] {
	&:checked {
		& + label {
			color: var(--primary-color);
			& > .notification {
				background-color: var(--primary-color);
				color: #fff;
			}
		}
	}
}



@media (max-width: 700px) {
    transform: scale(0.6);
  }


`

export const TabNavInput = styled('input')`
  display: none;
  &:checked {
		& ~ .glider {
			transform: ${(props) => ` translateX(${props.tabNum * 100}%)`}
		}
	}

`

export const TabNavLabel = styled('label')`
  display: flex;
align-items: center;
justify-content: center;
height: 54px;
width: 200px;
font-size: 1.5vw;
font-weight: 500;
border-radius: 99px; // just a high number to create pill effect
cursor: pointer;
transition: color 0.15s ease-in;

`

export const TabNavContentCount = styled('span')`
display: flex;
align-items: center;
justify-content: center;
width: 2.2vw;
height: 2.2vw;
margin-left: 0.75rem;
border-radius: 50%;
background-color: var(--secondary-color);
transition: 0.15s ease-in;

`

export const Glider = styled('span')` 
position: absolute;
display: flex;
height: 54px;
width: 200px;
background-color: var(--secondary-color);
z-index: 1;
border-radius: 99px; // just a high number to create pill effect
transition: 0.25s ease-out;

`
