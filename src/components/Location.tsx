import React from 'react';
import styled from 'styled-components/macro';
import { personalData } from '../data/personalData';
import { ColoredText } from '../components';

const Location: React.FC = () => {
  const { city, country } = personalData;

  return (
    <Container>
      <BigText>Situated in</BigText>
      <BigText>
        <ColoredText>{city}</ColoredText>,
      </BigText>
      <BigText>{country}</BigText>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 25px 75px;

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    width: 100%;
  }
`;

const BigText = styled.p`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }
`;
