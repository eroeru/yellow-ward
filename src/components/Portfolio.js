import React from "react";
import FlexScreen from "./layouts/FlexScreen";
import Header from "./subcomponents/Header";
import PortfolioPic from "../assets/portfolio_placeholder.png";
import YellowPic from "../assets/yw1.png";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Pagination]);

const headerText = "portfolio";
const Portfolio = React.forwardRef((props, ref) => (
  <FlexScreen ref={ref}>
  <Header headerText={headerText} />
  <Swiper loop navigation pagination={{ clickable: true }}>
    <SwiperSlide>
      <FirstWork />
    </SwiperSlide>
    <SwiperSlide>
      <SecondWork />
    </SwiperSlide>
  </Swiper>
</FlexScreen>
));

const FirstWork = styled(FlexScreen)`
  background-image: url(${PortfolioPic});
  background-size: cover;
`;

const SecondWork = styled(FlexScreen)`
  background-image: url(${YellowPic});
  background-size: cover;
`;

export default Portfolio;
