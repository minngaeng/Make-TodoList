import { useState } from 'react';
import * as S from './Signup.style';

const Signup = () => {
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

      <S.Button disabled={!isBtnValid}>회원 가입 하기</S.Button>
    </S.SignUp>
  );
};

export default Signup;
