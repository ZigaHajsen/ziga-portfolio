import React from 'react';
import styled from 'styled-components/macro';
import emailjs from 'emailjs-com';

const Form: React.FC = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xqke3x9',
        'template_qdrk3j2',
        e.target,
        'user_UiC549zCSACSVsQ8glaeX'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent. Thank you!');
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong. Please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <Container>
      <form onSubmit={sendEmail}>
        <Input type='name' placeholder='Name' name='name' />
        <Input type='email' placeholder='Email' name='email' />
        <Input type='text' placeholder='Subject' name='subject' />
        <Textarea placeholder='Message' name='message' />
        <Submit type='submit'>Contact Me</Submit>
      </form>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin: auto;

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQueries['phoneSmall']} {
    width: 80%;
  }
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.light};
  box-sizing: border-box;
  border: 0px;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    font-size: 0.75rem;
    padding: 0.75rem;
    margin-bottom: 0.75rem;
  }

  @media ${({ theme }) => theme.mediaQueries['phoneSmall']} {
    font-size: 0.6rem;
    padding: 0.6rem;
    margin-bottom: 0.6rem;
  }
`;

const Textarea = styled.textarea`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.light};
  box-sizing: border-box;
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

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    font-size: 0.75rem;
    padding: 0.75rem;
    margin-bottom: 0.75rem;
  }

  @media ${({ theme }) => theme.mediaQueries['phoneSmall']} {
    font-size: 0.6rem;
    padding: 0.6rem;
    margin-bottom: 0.6rem;
    height: 6rem;
  }
`;

const Submit = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: 0px;
  outline: none;
  padding: 0.75rem 1.5rem;
  display: flex;
  width: 100%;
  justify-content: center;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  font-size: 1rem;

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    font-size: 0.75rem;
    padding: 0.4rem 0.75rem;
  }

  @media ${({ theme }) => theme.mediaQueries['phoneSmall']} {
    font-size: 0.6rem;
    padding: 0.3rem 0.6rem;
  }
`;
