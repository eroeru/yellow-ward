import React from "react";
import styled from "styled-components";

const Header = ({ headerText }) => {
  return (
    <Container>
      <div>{headerText}</div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
`;

export default Header;
