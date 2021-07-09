import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { colors } from "./styles/colors";
import Profile from "./subcomponents/Profile";
import ProfileModel from "../models/ProfileModel";
import profilePicM1 from "../assets/profile_pic_m1.svg";
import profilePicM2 from "../assets/profile_pic_m2.svg";
import profilePicF1 from "../assets/profile_pic_f1.svg";
import FlexScreen from "./layouts/FlexScreen";
import Header from "./subcomponents/Header";

const eero = new ProfileModel("Eero", profilePicM1, "I'm a tough coder! Punch you in da face.");
const mark = new ProfileModel("Mark", profilePicM2, "I'm a tough coder! Punch you in da face.");
const zsofi = new ProfileModel("Zsófi", profilePicF1, "I'm a tough coder! Punch you in da face.");
const norman = new ProfileModel("Norman", profilePicM1, "I'm a tough coder! Punch you in da face.");

const aboutText =
"We design and build unique website and apps for your company, \
so you dont’t have to. Our principles are to create a simple \
but unique experience for you and for your users.";

const About = React.forwardRef((props, ref) => (
    <AboutScreen ref={ref}>
      <Header relative headerText={"about us"} />
      <AboutText secondary>{aboutText}</AboutText>
      <ProfileContainer>
        <Profile profilePic={eero.pic} profileName={eero.name} />
        <Profile profilePic={mark.pic} profileName={mark.name} />
        <Profile profilePic={zsofi.pic} profileName={zsofi.name} />
        <Profile profilePic={norman.pic} profileName={norman.name} />
      </ProfileContainer>
    </AboutScreen>
  ));

{
  /* A commenty comment */
}

const AboutScreen = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  width: 100vw;
`;

// Todo: check rem conversions.
const AboutText = styled.div`
  padding-left: 10rem;
  padding-right: 10rem;
  @media (max-width: 1152px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  @media (max-width: 740px) {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
  }
  @media (max-width: 480px) {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }
  padding-top: 2rem;
  padding-bottom: 3.7rem;
  font-family: Roboto Mono;
  font-weight: normal;
  font-size: 1.188rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0em;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
  padding-top: 4.75rem;
  background: #f7e03366;
`;
export default About;