import React from "react";
import styled from "styled-components";
import FlexScreen from "./layouts/FlexScreen";
import { colors } from "./styles/colors";
import Header from "./subcomponents/Header";
import TransferPic from "../assets/tw.png";

const Clients = () => {
  return (
    <ServicesScreen>
      <Header headerText={"clients"} secondary />
      <Container>
        <Badge src={TransferPic} />
        <Badge src={TransferPic} />
        <Badge src={TransferPic} />
      </Container>
    </ServicesScreen>
  );
};

const ServicesScreen = styled(FlexScreen)`
  width: 100vw;
  height: 50vh;
  background: ${colors.primary_grey};
`;

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-size: 4rem;
  padding-top: 1vh; ;
`;

const Badge = styled.img`
  width: 10vw;
  cursor: pointer;
  padding: 2rem;
`;

export default Clients;
