import React from "react";
import styled from "styled-components";
import { colors } from "./styles/colors";
import Card from "./subcomponents/Card";
import Header from "./subcomponents/Header";

const Services = () => {
  const firstCardImage = "image1";
  const firstCardTitle = "title1";
  const firstCardList = "a, b, c";

  const secondCardImage = "image2";
  const secondCardTitle = "title2";
  const secondCardList = "a, b, c";

  const thirdCardImage = "image3";
  const thirdCardTitle = "title3";
  const thirdCardList = "a, b, c";

  return (
    <Container>
      <Header left={"services"} />
      <Card
        upper={firstCardImage}
        middle={firstCardTitle}
        lower={firstCardList}
      />
      <Card
        upper={secondCardImage}
        middle={secondCardTitle}
        lower={secondCardList}
      />
      <Card
        upper={thirdCardImage}
        middle={thirdCardTitle}
        lower={thirdCardList}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  background: ${colors.secondary_yellow};
  font-size: 4rem;
  padding-top: 7rem;
  width: 100vw;
  height: 50vh;
`;

export default Services;
