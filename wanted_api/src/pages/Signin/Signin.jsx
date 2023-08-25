import { useState } from 'react';
import * as S from './Signin.style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);
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
      <S.Button onClick={onClickLogin}>로그인 하기</S.Button>
    </S.SignIn>
  );
};

export default Signin;
