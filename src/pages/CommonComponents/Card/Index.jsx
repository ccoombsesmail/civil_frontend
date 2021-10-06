import React from "react";
import UserInfoHeader from '../UserInfoHeader/Index'

import {
  Container,
  Body,
  Description,
} from "./Style";

const Card = ({
  children,
  summary,
  iconSrc,
  username,
  time,
  onClick,
  listCard,
  height,
}) => {
  return (
    <Container height={height} onClick={onClick} listCard={listCard}>
      <UserInfoHeader iconSrc={iconSrc} time={time} username={username} />
      <Description>&ldquo;{summary}&rdquo;</Description>
      <Body>
        {children}
      </Body>
    </Container>
  );
};

export default Card;
