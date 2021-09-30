import React from "react";
import {
  Container,
  Body,
  Header,
  Thumb,
  Description,
  ArrowContainer,
} from "./Style";
import { FiArrowDownCircle } from "react-icons/fi";
import useCalculateCardHeightEffect from "./hooks/useCalculateCardHeightEffect";

const Card = ({
  children,
  description,
  iconSrc,
  username,
  time,
  tweetRef,
  onClick,
  listCard,
}) => {
  const height = useCalculateCardHeightEffect(tweetRef)

  return (
    <Container height={height} onClick={onClick} listCard={listCard}>
      <Header>
        <Thumb src={iconSrc} />
        <div>
          <time>{time}</time>
          <h3>{`@${username} says...`}</h3>
        </div>
      </Header>
      <Description>&ldquo;{description}&rdquo;</Description>
      <Body>{children}</Body>
    </Container>
  );
};

export default Card;
