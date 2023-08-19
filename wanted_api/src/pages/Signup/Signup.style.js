import { styled } from 'styled-components';

export const SignUp = styled.div`
  box-sizing: border-box;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  /* border: 1px solid black; */
`;

export const Input = styled.input`
  width: 50%;
  height: 2rem;
`;

export const Button = styled.button`
  width: 51%;
  height: 2rem;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
