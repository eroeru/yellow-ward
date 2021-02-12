import React from 'react';
import styled from 'styled-components';
import { colors } from "./styles/colors";
import Card from "./subcomponents/Card";

const Services = () => {
  return (
    <Container>
        <Card />
        <Card />
        <Card />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background: ${colors.secondary_yellow};
  font-size: 4rem;
  padding-top: 7rem;
  width: 100vw;
  height: 50vh;
`;

export default Services;
