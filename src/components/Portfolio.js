import React from "react";
import FlexScreen from "./layouts/FlexScreen";
import Header from "./subcomponents/Header";
import PortfolioPic from "../assets/portfolio_placeholder.png";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  const headerText = "portfolio";
  return (
    <Swiper>
      <SwiperSlide>
        <Container>
          <Header headerText={headerText} />
        </Container>
      </SwiperSlide>
    </Swiper>
  );
};

const Container = styled(FlexScreen)`
  background-image: url(${PortfolioPic});
  background-size: cover;
`;

export default Portfolio;
