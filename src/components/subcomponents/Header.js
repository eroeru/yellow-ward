import styled, { css } from "styled-components";
import { colors } from "../styles/colors";

const Header = ({ headerText, secondary }) => {
  return (
    <Container secondary={secondary}>
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
  secondary &&
  css`
    color: ${colors.secondary_grey};
  `}
`;

export default Header;
