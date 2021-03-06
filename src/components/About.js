import React from "react";
import styled, { css } from "styled-components";
import { colors } from "./styles/colors";
import FlexScreen from "./layouts/FlexScreen";
import Header from "./subcomponents/Header";

const About = () => {
  const aboutText =
    "We design and build unique website and apps for your company, \
    so you dont’t have to. Our principles are to create a simple \
    but unique experience for you and for your users.";
    
  return (
    <AboutScreen>
      <Header headerText={"about us"} />
    </AboutScreen>
  );
};

const AboutScreen = styled(FlexScreen)`
  background: ${colors.secondary_grey};
`;

export default About;
