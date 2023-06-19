/* eslint-disable max-len */
import styled from 'styled-components'

export const BgImage = styled('div')`
  background-image: url("https://cdn.discordapp.com/attachments/1048453486456619088/1065232803744202812/C00mbsie_create_a_background_image_of_a_field_with_a_19th_centu_74420bf5-1e90-44e6-9064-b5c6c5574098.png");
  background-image: url("https://cdn.discordapp.com/attachments/1048453486456619088/1065236487370711090/C00mbsie_create_a_background_image_of_a_community_of_people_deb_47a2f56a-13a5-465a-85d3-07e263769fe3.png");
  /* background-image: url('https://media.discordapp.net/attachments/1048453486456619088/1113039225198235708/C00mbsie_Create_a_background_image_that_captures_the_essence_of_f0be86d7-02fa-481f-ad36-8faaa76da260.png?width=1398&height=630'); */
  
  background-image: url("https://media.discordapp.net/attachments/1048453486456619088/1113776177929273344/C00mbsie_Create_a_background_image_that_embodies_the_essence_of_7ba52926-ce55-4cab-96a6-5fb38709068a.png?width=1316&height=593");
  background-image: url("https://cdn.discordapp.com/attachments/1048453486456619088/1113776885311221760/C00mbsie_Create_a_background_image_that_embodies_the_essence_of_c50548a2-914e-411a-a6f8-4d683fa15900.png");
  
  /* background-image: url("https://media.discordapp.net/attachments/1048453486456619088/1115574754645114900/C00mbsie_create_a_background_image_that_represents_a_virutal_co_56bbeea5-53a8-4997-b288-c3bc341407d9.png?width=1398&height=630"); */
  
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
    /* background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.1)
    ); */
  }
`

export const HomePageGrid = styled('div')`
  /* width: 100vw;
  height: 100vh; */
  display: grid;
  transition: all 1s;
  grid-template-columns: ${(props) => (props.isOpen ? '1fr 2fr 1fr' : '.1fr 2fr 1fr')};

  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;

  }
`

export const DiscussionsGrid = styled('div')`
  display: grid;
  width: 100%;
  transition: all 1s;
  grid-template-columns: ${(props) => (props.isOpen ? '1fr 2fr 1fr' : '.1fr 3fr 1fr')};
  @media (max-width: 1250px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

export const Middle = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: white;
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
  align-items: flex-end;
  height: 100%;
  @media (max-width: 1250px) {
    width: 100%;
  }
`
