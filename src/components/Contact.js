import React from "react";
import styled, { css } from "styled-components";
import FlexScreen from "./layouts/FlexScreen";
import Header from "./subcomponents/Header";
import Button from "./subcomponents/Button";
import { colors } from "./styles/colors";

const hireText = "<send your project>";
const Contact = React.forwardRef((props, ref) => (
    <Container ref={ref}>
      <Header headerText={"contact us"} secondary />
      <ContactCenter>
        <ul>Would you like to work with us?</ul>
        <ul>Fill the form below, and tell us about your project.</ul>
        <form action="http://localhost:4000/submit" method="post">
          <div>
            <input type="text" placeholder="your name" name="name"/>
            <input type="email"placeholder="your e-mail address" name="email"/>  
          </div>        
          <div>
            <input type="tel" placeholder="your phone number" name="phone"/>
            <input type="textarea" placeholder="a few words about your project" name="description"/>
          </div>
          <Button as="button" type="submit" primary>{hireText}</Button>
        </form>
        <AddressBar>Tallinn</AddressBar>
      </ContactCenter>
    </Container>
));

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
