import React from 'react';
import styled from 'styled-components/macro';
import { personalData } from '../data/personalData';

const Location: React.FC = () => {
  return (
    <Address>
      <Text>
        {personalData.city}, {personalData.country}
      </Text>
      <SmallText>{personalData.email}</SmallText>
      <SmallText>{personalData.phone}</SmallText>
    </Address>
  );
};

export default Location;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
`;

export const Text = styled.p`
  font-size: 60px;
  font-weight: bold;
  margin-top: 0;
`;

export const SmallText = styled.p`
  font-size: 20px;
`;
