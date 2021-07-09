import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../styles/colors";

const Profile = (props) => (
  <FlexContainer>
    <ProfileImg onClick={() => profileClickAction(props.profileName)} src={props.profilePic}/>
    <ProfileNameText onClick={() => profileClickAction(props.profileName)}>{props.profileName}</ProfileNameText>
  </FlexContainer>
);

function profileClickAction(name) {
  console.log(`Yo ${name}`)
}

const FlexContainer = styled.div`
  display: flex;
  vertical-align: top;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-bottom: 4rem;
`;

const ProfileImg = styled.img`
  width: 345px;
  background-color: #c8ad7f;
  border-style: solid;
  border-radius: 50%;
  border-width: 20px; 
  border-color: #c8ad7f;
  min-width: 230px;
  max-width: 100%;
  min-height: 60%;
  max-height: 100%;
`;

const ProfileNameText = styled.div`
  padding-top: 1.5rem;
  font-family: Roboto Mono;
  font-weight: normal;
  font-size: 1.188rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0em;
  max-width: 100%;
  @media (max-width: 740px) {
    width: 345px;
  }
`;

export default Profile;
