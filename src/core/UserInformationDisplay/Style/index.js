import styled from 'styled-components'
import { Line } from '../../CommonComponents/Line'

export const IdentityProviderContainer = styled('div')`
  display: flex;
  flex-direction: column ;
  align-items: center;

`
export const IdentityImg = styled('img')` 
  width: 4vw;
  padding: 2vw 0 1vw 0;
`

export const IdentityProviderInnerContainer = styled('div')`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 2vw;

  svg {
    height: 1.6vw;
    fill: green;
  }
  span {
    font-size: 1vw;
    margin-right: 1vw;
    font-weight: bold;
  }

  path {
    fill: green;
  }

`

export const IdentityProviderImg = styled('img')` 
  width: 4vw;
`

export const AuthButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2vw 0;
  justify-content: space-around;
  align-items: center;

  .wallet-adapter-dropdown-list-active {
    opacity: 1;
    visibility: visible;
    transform: translateY(-220px);
  }

  b {
    color: #FFFFFF00;
    font-family: "Aventa", Sans-serif;
    font-size: 2vw;
    font-weight: 400;
    -webkit-text-stroke-width: 1px;
    stroke-width: 1px;
    -webkit-text-stroke-color: black;
    stroke: black;
  }

`

export const Container = styled('div')`
  --dark-cyan: hsl(185, 75%, 39%);
  --very-dark-blue: hsl(229, 23%, 23%);
  --very-gray-blue: hsl(227, 10%, 46%);
  --gray-dark: hsl(0, 0%, 59%);
  position: fixed;
  z-index: 99999;

  width: 85%;
  max-width: 21vw;
  text-align: center;
  margin: 1px;
  padding-top: 80px;
  margin-top: 50px;
  background: white
    url("https://cdn.discordapp.com/attachments/1048453486456619088/1065232803744202812/C00mbsie_create_a_background_image_of_a_field_with_a_19th_centu_74420bf5-1e90-44e6-9064-b5c6c5574098.png");
  background-repeat: repeat no-repeat;
  background-size: 90%;
  /* background-size: 200px 100px; */
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 10px 0 rgba(81, 82, 81, 0.32);
  border: 1px solid rgba(200,200,200,0.25);
  @media (max-width: 1250px) {
    display: none;
  }

  h1 {
    padding: 0;
  }

  h2 {
    padding-bottom: 10px;
    color: var(--gray-dark);

  }

.social {
  padding: 10px 0;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid var(--gray-dark);
  border-bottom: 1px solid var(--gray-dark)
}

.social h3 {
  font-size: 22px;
}
.social h3 small {
  margin-top: 8px;
  color: var(--gray-dark);
  display: block;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 1.5px;
}

.center {
  display: flex;
  justify-content: space-evenly;
}


`

export const Icon = styled('img')`
  object-fit: cover;
  background-color: white;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 10px solid white;
  transition: all 500ms ease-in-out;

  :hover {
    margin: 2rem;
  }
  @media (max-width: 600px) {
    :hover {
      height: 158px;
      width: 158px;
      margin: 2rem;
    }
  }
`

export const IdentityIcon = styled('img')` 
  width: 4vw;
  margin-bottom: 1vw;
`

export const PassesContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-top: 0.2vw;
  iframe {
    min-height: 640px;
  }
  button {
    border-radius: 4px;
  }

`

export const StyledLine = styled(Line)`
  margin: 1vw 0;
  width: 100%;
`

export const GetVerifiedContainer = styled('div')`
  -webkit-text-stroke-width: .5px;
  stroke-width: .5px;
  font-size: 1vw;
  margin-top: 10px;
  border-radius: 10px;
  transition: all .5s;
  color: rgba(255,96,65, 1);
  box-shadow: var(--box-shadow-inset);

  cursor: pointer; 
  :hover {
    background-color: rgba(255,96,65, 1);
    color: white;
  }
  svg:nth-child(3) {
    transform: rotate(180deg);
  }
  svg {
    margin: 5px;
    width: 1.5vw;
  }
`
