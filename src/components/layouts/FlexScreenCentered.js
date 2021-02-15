import styled, { css } from "styled-components";

export default styled.div`
  display: flex;
  font-size: 4rem;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;

  ${({ portfolio }) =>
    portfolio &&
    css`
      background-image: url('../../assets/portfolio_placeholder.png');
    `}
`;
