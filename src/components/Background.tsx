import React from 'react';
import styled from 'styled-components/macro';

interface BackgroundProps {
  children?: JSX.Element;
  background: string;
}

const Background: React.FC<BackgroundProps> = ({ children, background }) => {
  //@ts-ignore
  return <Container src={background}>{children}</Container>;
};

export default Background;

const Container = styled.div`
  background: url(${(props: any) => `../images/backgrounds/${props.src}.png`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.light};
`;
