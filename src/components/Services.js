import React from "react";
import styled from "styled-components";
import FlexScreen from "./layouts/FlexScreen";
import { colors } from "./styles/colors";
import Card from "./subcomponents/Card";
import Header from "./subcomponents/Header";


const firstCardData = { upper: "image1", middle: "title1", lower: "a, b, c" };
const secondCardData = { upper: "image2", middle: "title2", lower: "a, b, c" };
const thirdCardData = { upper: "image3", middle: "title3", lower: ["a", "b", "c"] };
const bewRef = React.createref();

const Services = React.forwardRef((props, ref) => (
      <ServicesScreen ref={ref}>
        <Header headerText={"services"} />
        <Container ref={bewRef}>
          <Card cardData={firstCardData} />
          <Card cardData={secondCardData} />
          <Card cardData={thirdCardData} />
        </Container>
      </ServicesScreen>

));


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
  padding-top: 1vh; ;
`;

export default Services;
