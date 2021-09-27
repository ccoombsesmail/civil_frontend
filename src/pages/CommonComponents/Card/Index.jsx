import React, { useEffect, useState } from 'react'
import { Container, Body, Header, Thumb, Description, ArrowContainer } from './Style'
import { FiArrowDownCircle } from 'react-icons/fi'



const Card = ({ children, description, iconSrc, username, time, tweetRef, onClick, listCard }) => {
  // const frame = document.querySelector('iframe')?.id
  const [height, setHeight] = useState('20vw')

  useEffect(() => {
    setTimeout(() => {
      const tweetFrame = tweetRef?.current?.querySelector('iframe')
      if (tweetFrame) {
        const compStyles = window.getComputedStyle(tweetFrame);
        const height = compStyles.getPropertyValue('height')
        setHeight(`${Number(height.slice(0, height.length-2)) + Math.ceil((window.innerWidth * 7.5 / 100))}px`)
      }
    }, 3000)
  }, [tweetRef, children])
   return (
      <Container height={height} onClick={onClick} listCard={listCard}>
           <Header>
             <Thumb src={`/assets${iconSrc}`} />
             <div>
              <time>{time}</time>
              <h3>{`@${username} says...`}</h3>
            </div>
           </Header>
           <Description>&ldquo;{description}&rdquo;
           
           </Description>
           <ArrowContainer >
            <FiArrowDownCircle  />
            </ArrowContainer>
           <Body>
             {children}
           </Body>
           {/* <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p> */}
     </Container>
   )

 }

// const Header = ({ children }) => (
//   <TextContainer>
//     {children}
//   </TextContainer>
// )
// Card.Header = Header

export default Card
