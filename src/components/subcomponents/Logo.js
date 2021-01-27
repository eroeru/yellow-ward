import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <Container>{yellowString}</Container>;
};

const yellowString = "<yellow ward>";

const Container = styled.div`
  color: #F7E033;
  font-family: 'Roboto Mono', monospace;
  font-size: 40px;
`;

export default Logo;
