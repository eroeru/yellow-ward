import styled, { css } from "styled-components";
import { colors } from "../styles/colors";

const Header = ({ headerText, secondary, relative }) => {
  return (
    <Container secondary={secondary} relative={relative}>
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

  ${({ relative }) =>
    relative &&
    css`
      position: relative;
    `}
`;

export default Header;
