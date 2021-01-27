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
  padding: 4vh 10vw 0vh 7vw;
  align-items: center;
  flex-direction: row;
  background: transparent;
  color: ${colors.secondary_grey};
`;

export default Navbar;
