import React from "react";
import styled, { css } from "styled-components";
import FlexScreen from "./layouts/FlexScreen";
import Header from "./subcomponents/Header";

const About = () => {
  return (
    <FlexScreen>
      <Header headerText={"about"} />
    </FlexScreen>
  );
};

export default About;
