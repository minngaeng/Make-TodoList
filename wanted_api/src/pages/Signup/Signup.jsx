import { useState } from 'react';
import * as S from './Signup.style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBtnValid, setIsBtnValid] = useState(false);

  const onChangeEmail = (event) => {
    setEmail(event.currentTarget.value);

    if (event.currentTarget.value.includes('@') && password.length >= 8) {
      setIsBtnValid(true);
    } else {
      setIsBtnValid(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);

    if (email.includes('@') && event.currentTarget.value.length >= 8) {
      setIsBtnValid(true);
    } else {
      setIsBtnValid(false);
    }
  };

  const goToSignUp = async () => {
    try {
      const response = await axios.post(
        ' https://www.pre-onboarding-selection-task.shop/auth/signup',
        {
          email,
          password,
        }
      );
      console.log(response);
      if (response.status === 201) {
        navigate('/signin');
        console.log('회원가입 성공!');
      }
    } catch (error) {
      console.error(error.response.data.statusCode);
      if (error.response.data.statusCode === 400) {
        alert('동일한 이메일이 존재합니다. 다른 이메일을 입력해 주세요.');
        setEmail('');
        setIsBtnValid(false);
      }
    }
  };

  return (
    <S.SignUp>
      <h2>회원가입하기</h2>
      <S.Input
        type="text"
        value={email}
        onChange={onChangeEmail}
        placeholder="이메일을 입력해 주세요."
      />

      <S.Input
        type="text"
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호를 입력해 주세요."
      />

      <S.Button disabled={!isBtnValid} onClick={goToSignUp}>
        회원 가입 하기
      </S.Button>
    </S.SignUp>
  );
};

export default Signup;
