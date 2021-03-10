import React from "react";
import styled, { css } from "styled-components";
import FlexScreen from "./layouts/FlexScreen";
import Header from "./subcomponents/Header";
import Button from "./subcomponents/Button";
import { colors } from "./styles/colors";

const Contact = () => {
  const hireText = "<send your project>";

  return (
    <Container>
      <Header headerText={"contact us"} secondary />
      <ContactCenter>
        <ul>Would you like to work with us?</ul>
        <ul>Fill the form below, and tell us about your project.</ul>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <Button primary>{hireText}</Button>
        <AddressBar>Tallinn</AddressBar>
      </ContactCenter>
    </Container>
  );
};

const Container = styled(FlexScreen)`
  background: ${colors.primary_grey};
  color: ${colors.secondary_grey};
`;

const ContactCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto Mono;
  font-weight: 700;
  font-size: 2.5rem;
  flex-direction: column;
  margin: 0 auto;
`;

const AddressBar = styled.div`
  font-family: Roboto Mono;
  font-weight: 400;
  font-size: 1.1875rem;
  text-align: center;
`;

export default Contact;
