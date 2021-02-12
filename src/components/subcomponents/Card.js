import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Card = () => {
  return <Container>{yellowString}</Container>;
};

const yellowString = " Products ";

const Container = styled.div`
  background: ${colors.primary_grey};
  font-family: 'Roboto Mono', monospace;
  font-size: 40px;
  text-align: center;
  width: 20vw;
  height: 40vh;
`;

export default Card;
