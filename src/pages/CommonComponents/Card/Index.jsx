import React, { useEffect, useState } from 'react'
import { Container, Body, Header, Thumb, Description, DownArrow } from './Style'
import { FiArrowDownCircle } from 'react-icons/fi'
const Card = ({ children, description, iconSrc, username, time, tweetRef }) => {
  const frame = document.querySelector('iframe')?.id
  const [height, setHeight] = useState('20vw')
  console.log(height)
  useEffect(() => {
    setTimeout(() => {
      const tweetFrame = tweetRef?.current?.querySelector('iframe')
      console.log(tweetFrame)
      if (tweetFrame) {
        const compStyles = window.getComputedStyle(tweetFrame);
        const height = compStyles.getPropertyValue('height')
        console.log(height)
        console.log(Number(height.slice(0, height.length-2)))
        setHeight(`${Number(height.slice(0, height.length-2)) + Math.ceil((window.innerWidth * 6.4 / 100))}px`)
      }
    }, 3000)
  }, [tweetRef, children, frame])
   return (
      <Container height={height}>
           <Header>
             <Thumb src={iconSrc} />
             <div>
              <time>{time}</time>
              <h3>{`@${username} says...`}</h3>
            </div>
           </Header>
           <Description>&ldquo;{description}&rdquo;
           <DownArrow />
           
           </Description>
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
