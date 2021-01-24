import React from "react";
import styled from "styled-components";
import HeroPic from "../assets/hero.png";

const Hero = () => {
  return (
    <Container>
      <HeroSection>
        <TextNButtons>
          <input></input>
        </TextNButtons>{" "}
        <HeroPicPlace src={HeroPic} />
      </HeroSection>
    </Container>
  );
};

const TextNButtons = styled.div`
  width: 80vw;
`;

const HeroPicPlace = styled.img`
  width: 30vw;
`;

const HeroSection = styled.div`
  display: flex;
  width: 70vw;
  height: 50vh;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

// TODO: the fixed width and height should be made %%

const Container = styled.div`
  display: flex;
  background: #3f3f3f;
  font-size: 4rem;
  padding-top: 7rem;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default Hero;
