import styled, { css } from "styled-components";
import { colors } from "../styles/colors";

const Profile = ({ profilePic, name}) => {
  return (
    <FlexContainer>
      <ProfileImg src = {profilePic}> </ProfileImg>
      <ProfileNameText>{name}</ProfileNameText>
    </FlexContainer >
  );
};

const FlexContainer = styled.div`
display: flex;
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