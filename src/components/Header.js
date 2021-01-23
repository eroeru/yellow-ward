import React from 'react';
import styled, {css} from 'styled-components';

const Header = ({left, center, right}) => {
  return (
    <Container>
      <Center>{center}</Center>
      <Flex>
        <div>{left}</div>
        <div></div>
        <div>{right}</div>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
`;

const Center = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  & > h1,
  & > * > h1 {
    margin-top: 1.8rem;
    margin-bottom: 1rem;
  }
  & > * {
    margin-top: 1rem;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;
  align-items: center;
  flex-direction: row;
`;

export default Header;
