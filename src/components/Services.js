import React from "react";
import styled from "styled-components";
import FlexScreen from "./layouts/FlexScreen";
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
    <ServicesScreen>
      <Header headerText={"services"} />
      <Container>
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
    </ServicesScreen>
  );
};

const ServicesScreen = styled(FlexScreen)`
  width: 100vw;
  height: 50vh;
  background: ${colors.secondary_yellow};
`;

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-size: 4rem;
  padding-top: 1vh;;
`;

export default Services;
