import React from 'react';
import styled from 'styled-components/macro';
import { footerLinks } from '../data/links';

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>© Žiga Hajšen 2021</Text>
      <Group>
        {footerLinks.map((link) => {
          const { id, url, target, icon } = link;

          return (
            <Link key={id} href={url} target={target}>
              <Icon>{icon}</Icon>
            </Link>
          );
        })}
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
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.light};

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    height: 70px;
  }
`;

const Text = styled.p`
  margin-left: 50px;
  font-size: 1rem;
`;

const Group = styled.div`
  margin-right: 50px;
`;

const Link = styled.a`
  margin-left: 1.5rem;
  font-size: 1.5rem;
`;

const Icon = styled.i`
  color: ${(props) => props.theme.colors.light};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
