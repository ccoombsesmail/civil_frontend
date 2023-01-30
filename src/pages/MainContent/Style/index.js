/* eslint-disable max-len */
import styled from 'styled-components'

export const BgImage = styled('div')` 
  background-image: url('https://cdn.discordapp.com/attachments/1048453486456619088/1065232803744202812/C00mbsie_create_a_background_image_of_a_field_with_a_19th_centu_74420bf5-1e90-44e6-9064-b5c6c5574098.png');
  background-image: url('https://cdn.discordapp.com/attachments/1048453486456619088/1065236487370711090/C00mbsie_create_a_background_image_of_a_community_of_people_deb_47a2f56a-13a5-465a-85d3-07e263769fe3.png');
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  z-index: -1;
&::before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255,255,255, 1), rgba(255,255,255, .1));
}

`

export const HomePageGrid = styled('div')`
  /* width: 100vw;
  height: 100vh; */
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`

export const DiscussionsGrid = styled('div')`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  @media (max-width: 1250px) {
    grid-template-columns: 1fr;
    justify-items: center;

  }
`

export const Middle = styled('div')`
  display: flex;
  flex-direction: column;

`

export const Left = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`

export const Right = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1250px) {
    width: 100%;

  }

`
