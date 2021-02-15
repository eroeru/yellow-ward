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
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`;

export default Header;
