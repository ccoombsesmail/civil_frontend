import styled from 'styled-components'

export const Container = styled('div')`
  --dark-cyan: hsl(185, 75%, 39%);
  --very-dark-blue: hsl(229, 23%, 23%);
  --very-gray-blue: hsl(227, 10%, 46%);
  --gray-dark: hsl(0, 0%, 59%);
  z-index: 999999999999;

  /* max-width: 21vw; */
  text-align: center;
  padding-top: 80px;
  background: white
    url("https://cdn.discordapp.com/attachments/1048453486456619088/1065232803744202812/C00mbsie_create_a_background_image_of_a_field_with_a_19th_centu_74420bf5-1e90-44e6-9064-b5c6c5574098.png");
  background-repeat: repeat no-repeat;
  background-size: 90%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 10px 0 rgba(81, 82, 81, 0.32);


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
  position: absolute;
  right: 0;

`

