import React from "react";
import FlexScreenCentered from "./layouts/FlexScreenCentered";
import PortfolioPic from "../assets/portfolio_placeholder.png";
import styled from "styled-components";
import Header from "./subcomponents/Header";

const Portfolio = () => {
  return (
    <FlexScreenCentered>
      <Header headerText={"portfolio"}/>
      <HeroPicPlace src={PortfolioPic} />
    </FlexScreenCentered>
  );
};

const HeroPicPlace = styled.img`
  width: 100%;
  height: 100%;
`;

const Container = styled(FlexScreenCentered)`
  position: absolute;
`;

export default Portfolio;
