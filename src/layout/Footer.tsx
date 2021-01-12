import React from 'react';
import styled from 'styled-components/macro';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>© Žiga Hajšen 2021</Text>
      <Group>
        <Link href='https://github.com/ZigaHajsen' target='_blank'>
          <Icon>
            <FaGithub />
          </Icon>
        </Link>
        <Link href='https://www.linkedin.com/in/ziga-hajsen/' target='_blank'>
          <Icon>
            <FaLinkedin />
          </Icon>
        </Link>
      </Group>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 100vw;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  margin-left: 50px;
`;

const Group = styled.div`
  margin-right: 50px;
`;

const Link = styled.a`
  margin-left: 25px;
  font-size: 25px;
`;

const Icon = styled.i`
  color: white;

  &:hover {
    color: green;
  }
`;
