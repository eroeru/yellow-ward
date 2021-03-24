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
      <Header relative headerText={"about us"} />
      <AboutText secondary>{aboutText}</AboutText>
    </AboutScreen>
  );
};

const AboutScreen = styled(FlexScreen)`
  flex-direction: column;
`;

// Todo: check rem conversions.
const AboutText = styled.div`
  padding-left: 10rem;
  padding-top: 2rem;
  font-family: Roboto Mono;
  font-weight: normal;
  font-size: 1.188rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0em;
`;

export default About;
