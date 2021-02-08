import React from 'react';
import styled from 'styled-components/macro';

const VerticalText: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default VerticalText;

export const Container = styled.p`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  position: fixed;
  left: 0px;
  font-size: 150px;
  height: 100vh;
  width: 200px;
  margin-block-end: 0;
  margin-block-start: 0;
  display: flex;
  justify-content: center;
  opacity: 0.1;
  color: ${(props) => props.theme.colors.light};

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    display: none;
  }
`;
