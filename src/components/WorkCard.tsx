import React from 'react';
import styled from 'styled-components/macro';
import { work } from '../data/work';
import { ColoredText } from '../components';

const WorkCard: React.FC = () => {
  return (
    <Container>
      {work.map((project) => {
        const { id, image, title, text, github, liveSite } = project;

        return (
          <Group key={id}>
            <Image src={image} />
            <Footer>
              <TextGroup>
                <Title>
                  <ColoredText>{title}</ColoredText>
                </Title>
                <Text>{text}</Text>
              </TextGroup>
              <LinkGroup>
                <Link href={github.url} target={github.target}>
                  <Icon>{github.icon}</Icon>
                </Link>
                <Link href={liveSite.url} target={liveSite.target}>
                  <Icon>{liveSite.icon}</Icon>
                </Link>
              </LinkGroup>
            </Footer>
          </Group>
        );
      })}
    </Container>
  );
};

export default WorkCard;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 100px;

  @media ${({ theme }) => theme.mediaQueries['tablet']} {
    grid-gap: 2rem;
    padding: 50px;
  }

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    grid-template-columns: 1fr;
  }
`;

const Group = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  width: 500px;

  @media ${({ theme }) => theme.mediaQueries['tablet']} {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    display: none;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 5px;

  @media ${({ theme }) => theme.mediaQueries['tablet']} {
    font-size: 1.2rem;
    margin: 0.7rem;
  }

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    font-size: 1rem;
    margin: 0.5rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 5px 0 10px 5px;

  @media ${({ theme }) => theme.mediaQueries['tablet']} {
    font-size: 0.9rem;
    margin: 0.7rem;
  }

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    font-size: 0.75rem;
    margin: 0.4rem;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 25px;
`;

const Link = styled.a`
  margin-left: 25px;
  font-size: 2rem;

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    font-size: 1.5rem;
  }
`;

const Icon = styled.i`
  color: ${(props) => props.theme.colors.light};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
