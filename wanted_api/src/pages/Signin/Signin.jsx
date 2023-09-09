import { useState } from 'react';
import * as S from './Signin.style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
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

  const onClickLogin = async () => {
    try {
      const response = await axios.post(
        'https://www.pre-onboarding-selection-task.shop/auth/signin',
        {
          email,
          password,
        }
      );
      console.log(response);
      if (response.status === 200) {
        console.log('로그인 성공!');
        localStorage.setItem('access_token', response.data.access_token);
        navigate('/todo');
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      if (error.response.data.message === '해당 사용자가 존재하지 않습니다.') {
        alert('회원가입을 먼저 진행해 주세요.');
      }
    }
  };

  return (
    <S.SignIn>
      <h2>로그인하기</h2>
      <S.Input
        value={email}
        onChange={onChangeEmail}
        type="text"
        placeholder="이메일을 입력해 주세요."
      />
      <S.Input
        value={password}
        onChange={onChangePassword}
        type="text"
        placeholder="비밀번호를 입력해 주세요."
      />
      <S.Button disabled={!isBtnValid} onClick={onClickLogin}>
        로그인 하기
      </S.Button>
      <S.Button>회원가입 하기</S.Button>
    </S.SignIn>
  );
};

export default Signin;
