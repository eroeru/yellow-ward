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
  display: flex;
  padding-top: 14vh;
  padding-left: 4vw;
  font-size: 2.5rem;
`;

export default Header;
