import React from "react";
import styled from "styled-components";
import { colors } from "./styles/colors";

const Navbar = ({ left, right }) => {
  return (
    <Container>
    <Flex>
      <div>{left}</div>
      <div></div>
      <div>{right}</div>
    </Flex>
    </Container>
  );
};

const Container = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vh 10vw 1vh 7vw;
  border-radius: 1%;
  align-items: center;
  flex-direction: row;
  background: ${colors.primary_grey};
  opacity: 0.7;
  color: ${colors.secondary_grey};
`;

export default Navbar;
