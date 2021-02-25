import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Badge = ({ clientPic }) => {

  const picBackground = {
    backgroundImage: 'url(${clientPic})',
  }

  return (
    <ClientButton style="background-image: url(${clientPic});"/>
  );
};

const ClientButton = styled.button`
  border-radius: 2rem;
`;

export default Badge;
