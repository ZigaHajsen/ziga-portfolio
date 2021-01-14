import React from 'react';
import styled from 'styled-components/macro';

const Form = () => {
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
  width: 47%;
`;

const Input = styled.input`
  background-color: #212121;
  color: white;
  border: 0px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  outline: none;
`;

const Textarea = styled.textarea`
  background-color: #212121;
  color: white;
  border: 0px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  resize: none;
  overflow: auto;
  outline: none;
`;

const Submit = styled.button`
  background-color: green;
  border: 0px;
  outline: none;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  color: white;
  cursor: pointer;
`;
