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
      <AboutText secondary>
            {aboutText}
          </AboutText>
    </AboutScreen>
  );
};

const AboutScreen = styled(FlexScreen)`
  background: ${colors.secondary_grey};
`;

const AboutText = styled.div`
  font-family: Roboto Mono;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 0rem;
  font-style: normal;
  line-height: 2.9375rem;
  letter-spacing: 0em;
  text-align: left;
`;

export default About;
