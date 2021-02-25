import React from "react";
import styled from "styled-components";
import FlexScreen from "./layouts/FlexScreen";
import { colors } from "./styles/colors";
import Badge from "./subcomponents/Badge";
import Header from "./subcomponents/Header";

const Services = () => {

  const aCardData = {upper: "image1", middle: "title2", lower: "a,b,c"};

//   const bCardImage = "image2";
//   const bCardTitle = "title2";
//   const bCardList = "a, b, c";

//   const cCardImage = "image3";
//   const cCardTitle = "title3";
//   const cCardList = "a, b, c";

  return (
    <ServicesScreen>
      <Header headerText={"services"} />
      <Container>
        <Card
          cardData={aCardData}
        />
        <Card
        //   upper={bCardImage}
        //   middle={bCardTitle}
        //   lower={bCardList}
        />
        <Card
        //   upper={cCardImage}
        //   middle={cCardTitle}
        //   lower={cCardList}
        />
      </Container>
    </ServicesScreen>
  );
};

const ServicesScreen = styled(FlexScreen)`
  width: 100vw;
  height: 50vh;
  background: ${colors.bary_yellow};
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
