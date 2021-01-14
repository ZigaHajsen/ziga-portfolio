import React from 'react';
import styled from 'styled-components/macro';

const ColoredText: React.FC = ({ children }) => {
  return <Span>{children}</Span>;
};

export default ColoredText;

const Span = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;
