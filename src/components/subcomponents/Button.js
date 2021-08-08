import styled, { css } from "styled-components";
import { colors } from "../styles/colors";

const Button = styled.button`
  margin: 1rem;
  border: 1px solid transparent;
  outline: none;
  background: none;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.1875rem;
  padding: 1rem 1rem;
  transition: 0.2s border;
  transition: 0.56s;
  min-width: 1rem;
  letter-spacing: 1px;
  box-sizing: border-box;
  pointer-events: all;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid;
    border-color: ${colors.primary_yellow};
  }

  ${({ primary }) =>
    primary &&
    css`
      background: ${colors.primary_yellow};
      color: #000000;
      border: 1px solid ${colors.primary_grey};
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      border: 1px solid;
      border-color: linear-gradiant(to bottom, ${colors.primary_yellow} 0%, ${colors.primary_gray} 49%, rgba(41, 52, 61, .8) 50%,rgba(41, 52, 61, .8) 100%);
    `}
`;

export default Button;