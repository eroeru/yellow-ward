import React from "react";
import styled, { css } from "styled-components";
import FlexScreen from "./layouts/FlexScreen";
import Header from "./subcomponents/Header";

const Contact = () => {
  return (
    <FlexScreen>
      <Header headerText={"contact"} />
    </FlexScreen>
  );
};

export default Contact;
