import React from 'react';
import styled from 'styled-components/macro';

const Form: React.FC = () => {
  return (
    <Base>
      <Input type='name' placeholder='Name' />
      <Input type='email' placeholder='Email' />
      <Input type='text' placeholder='Subject' />
      <Textarea placeholder='Message' />
      <Submit>Contact Me</Submit>
    </Base>
  );
};

export default Form;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin: auto;
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.light};
  border: 0px;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.light};
  border: 0px;
  padding: 1rem;
  width: 100%;
  height: 8rem;
  margin-bottom: 1rem;
  resize: none;
  overflow: auto;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
`;

const Submit = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: 0px;
  outline: none;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  font-size: 1rem;
`;
