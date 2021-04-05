import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../styles/colors";


const Profile = props => (
    <FlexContainer>
      <ProfileImg src = {props.profilePic} />
      <ProfileNameText> {props.profileName} </ProfileNameText>
    </FlexContainer >
  );

const FlexContainer = styled.div`
display: flex;
flex-direction: column;
`;

const ProfileImg = styled.img`
`;

const ProfileNameText = styled.div`
  padding-left: 10rem;
  padding-top: 2rem;
  font-family: Roboto Mono;
  font-weight: normal;
  font-size: 1.188rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0em;
`;

export default Profile;