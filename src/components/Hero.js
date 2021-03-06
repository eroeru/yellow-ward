import React from "react";
import styled, { css } from "styled-components";
import HeroPic from "../assets/hero.png";
import Button from "./subcomponents/Button";
import FlexScreen from "./layouts/FlexScreen";
import { colors } from "./styles/colors";

const Hero = () => {
  const hireText = "<hire us>";
  const seeMoreText = "<see more of our work>";
  return (
    <Container>
      <HeroSection>
        <TextNButtons>
          <Text>Web design, development and more.</Text>
          <Text secondary>
            We make very basic projects, so you don't have to.
          </Text>
          <Button primary>{hireText}</Button>
          <Button secondary>{seeMoreText}</Button>
        </TextNButtons>
        <HeroPicPlace src={HeroPic} />
      </HeroSection>
    </Container>
  );
};

const Text = styled.div`
  font-family: Roboto Mono;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 0rem;
  font-style: normal;
  line-height: 2.9375rem;
  letter-spacing: 0em;
  text-align: left;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 1.4375rem;
    `}
`;

const TextNButtons = styled.div`
  color: ${colors.secondary_grey};
  width: 80vw;
`;

const HeroPicPlace = styled.img`
  width: 30vw;
`;

const HeroSection = styled.div`
  display: flex;
  width: 73vw;
  height: 50vh;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const Container = styled(FlexScreen)`
  background: ${colors.primary_grey};
  align-items: center;
  justify-content: center;
`;

export default Hero;
