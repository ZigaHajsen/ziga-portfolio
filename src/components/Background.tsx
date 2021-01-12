import React from 'react';
import styled from 'styled-components/macro';

interface BackgroundProps {
  children?: JSX.Element;
  src: string;
}

const Background: React.FC<BackgroundProps> = ({ children, src }) => {
  //@ts-ignore
  return <Container src={src}>{children}</Container>;
};

export default Background;

const Container = styled.div`
  background: url(${(props: any) => `../images/backgrounds/${props.src}.png`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
