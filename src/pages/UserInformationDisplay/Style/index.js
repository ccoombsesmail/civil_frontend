import styled, { keyframes } from 'styled-components'

const play = keyframes`
  {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -2800px 0px;
  }
}`

export const Container = styled('div')`
  --dark-cyan: hsl(185, 75%, 39%);
  --very-dark-blue: hsl(229, 23%, 23%);
  --very-gray-blue: hsl(227, 10%, 46%);
  --gray-dark: hsl(0, 0%, 59%);
  z-index: 9999999;
  /* width: 90%;
  max-height: 40vh; */

  width: 85%;
  text-align: center;
  margin: 1px;
  padding-top: 180px;
  margin-top: 50px;
  background: white
    url("https://www.highlanderibiza.com/wp-content/uploads/2013/01/bg-sea-beach5.jpg")
    0 190%;
  background-repeat: repeat no-repeat;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 10px 0 rgba(81, 82, 81, 0.32);

.social {
  padding: 10px 0;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid var(--gray-dark);
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
.heart {
  background: url('https://abs.twimg.com/a/1446686284/img/t1/web_heart_animation.png');
  background-position: left;
  background-repeat: no-repeat;
  background-size: auto;
  height: 100px;
  width: 100px;
}

.heart:hover {
  animation: ${play} 1s steps(100);
}

  h1 {
    margin: 0;
    margin-top: 15px;
    font-size: 25px;
  }

  h1 span {
  color: var(--gray-dark);
  font-weight: 400;
  }
  h2 {
    color: var(--gray-dark);
    font-weight: 400;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 50px;
  }

  @media (max-width: 600px) {
    min-width: 300px;
  }

`

export const Icon = styled('img')`
  object-fit: cover;
  height: 128px;
  width: 128px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid white;
  transition: all 500ms;

  :active {
    height: 158px;
    width: 158px;
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
