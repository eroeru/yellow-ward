import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Card = ({ cardData }) => {

  return (
    <Container>
      <div>{cardData.upper}</div>
      <div>{cardData.middle}</div>
      <div>{cardData.lower}</div>
    </Container>
  );
};

const Container = styled.div`
  background: ${colors.primary_grey};
  font-family: "Roboto Mono", monospace;
  font-size: 40px;
  color: ${colors.secondary_grey};
  text-align: center;
  width: 16vw;
  height: 40vh;
  flex-direction: column;
  margin: 4vw;
  border-radius: 1rem;
`;

export default Card;
