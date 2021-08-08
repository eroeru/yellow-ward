import React from "react";
import styled, { css } from "styled-components";
import FlexScreen from "./layouts/FlexScreen";
import Header from "./subcomponents/Header";
import Card from "./subcomponents/Card";

const Testimonials = () => {
  return (
    <FlexScreen>
      <Header headerText={"testimonials"} />
      <Card />
      <Card />
      <Card />
    </FlexScreen>
  );
};

export default Testimonials;
