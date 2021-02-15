import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Card = ({ upper, middle, lower }) => {
  return (
    <Container>
      <div>{upper}</div>
      <div>{middle}</div>
      <div>{lower}</div>
    </Container>
  );
};

const Container = styled.div`
  background: ${colors.primary_grey};
  font-family: "Roboto Mono", monospace;
  font-size: 40px;
  text-align: center;
  width: 16vw;
  height: 40vh;
  flex-direction: column;
  margin: 4vw;
`;

export default Card;
