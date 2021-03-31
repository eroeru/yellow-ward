import React from "react";
import styled, { css } from "styled-components";
import { colors } from "./styles/colors";
import Profile from "./subcomponents/Profile";
import ProfilePicM1 from "../assets/profile_pic_m1.svg";
import ProfilePicM2 from "../assets/profile_pic_m2.svg";
import ProfilePicF1 from "../assets/profile_pic_f1.svg";
import FlexScreen from "./layouts/FlexScreen";
import Header from "./subcomponents/Header";

const About = () => {
  const aboutText =
    "We design and build unique website and apps for your company, \
    so you dont’t have to. Our principles are to create a simple \
    but unique experience for you and for your users.";

  return (
    <AboutScreen>
      <Header relative headerText={"about us"} />
      <AboutText secondary>{aboutText}</AboutText>
      <Profile profilePic={ProfilePicM1}> name = { "Eero" } </Profile>
    </AboutScreen>
  );
};

{ /* A commenty comment */}

const AboutScreen = styled(FlexScreen)`
  flex-direction: column;
`;

// Todo: check rem conversions.
const AboutText = styled.div`
  padding-left: 10rem;
  padding-top: 2rem;
  font-family: Roboto Mono;
  font-weight: normal;
  font-size: 1.188rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0em;
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const ProfileImg = styled.img``;

export default About;
