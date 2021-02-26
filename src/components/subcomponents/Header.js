import styled, { css } from "styled-components";
import { colors } from "../styles/colors";

const Header = ({ headerText }) => {
  return (
    <Container>
      <div>{headerText}</div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  padding-top: 14vh;
  padding-left: 4vw;
  font-size: 2.5rem;
  z-index: 800;

  ${({ secondary }) =>
  // TODO: MAKE THIS WORK
  secondary &&
  css`
    color: red;
  `}
`;

export default Header;
