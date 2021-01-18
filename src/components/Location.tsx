import React from 'react';
import styled from 'styled-components/macro';
import { personalData } from '../data/personalData';
import { ColoredText } from '../components';

const Location: React.FC = () => {
  const { city, country, email, phone } = personalData;

  return (
    <LocationDiv>
      <BigText>
        <ColoredText>{city}</ColoredText>, {country}
      </BigText>
      <SmallText>{email}</SmallText>
      <SmallText>{phone}</SmallText>
    </LocationDiv>
  );
};

export default Location;

const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 25px 75px;
`;

const BigText = styled.p`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 8rem;
`;

const SmallText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;
