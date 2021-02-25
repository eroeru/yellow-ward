import React from "react";
import FlexScreen from "./layouts/FlexScreen";
import Header from "./subcomponents/Header";
import PortfolioPic from "../assets/portfolio_placeholder.png";
import YellowPic from "../assets/yw1.png";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const Portfolio = () => {
  const headerText = "portfolio";
  return (
    <FlexScreen>
      <Header headerText={headerText} />
      <Swiper loop="true">
        <SwiperSlide>
          <FirstWork />
        </SwiperSlide>
        <SwiperSlide>
          <SecondWork />
        </SwiperSlide>
      </Swiper>
    </FlexScreen>
  );
};

const FirstWork = styled(FlexScreen)`
  background-image: url(${PortfolioPic});
  background-size: cover;
`;

const SecondWork = styled(FlexScreen)`
  background-image: url(${YellowPic});
  background-size: cover;
`;

export default Portfolio;
