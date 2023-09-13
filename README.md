### [Create todo list - CRUD with axios]

<br />

### 소개
Membership registration and login authentication were implemented and redirected through this.
After logging in, you can CRUD the todo list you made.

회원가입 및 로그인 인증을 구현하고 이를 통한 리다이렉트 처리가 가능케 하였습니다.
로그인 후 자신이 만든 toodo list 의 CRUD 가 가능합니다. 

### 시작 가이드

#### Installation

```bash
$ git clone 
$ npm install
$ npm start
```

### 주요 기능 📦

- 📝 회원가입 
  - 통신 : `axios`를 사용해 API와 연동. 성공 시 로그인 페이지로 이동. 중복 가입 시 경고 메시지 출력.

- 📝 로그인
- 입력 : 유효한 이메일과 8 자리 이상의 비밀번호 입력.
- 통신 : `axios` 를 사용하여 API 와 연동하여 로그인 처리를 진행.
  - 로그인 성공 시 : 토큰을 로컬 스토리지에 저장하고 할 일 목록 페이지로 이동.
  - 실패 시 : 오류 메시지를 출력하며, 해당 사용자가 없을 경우 회원 가입 권장.

- 📝 Todo List
  - CRUD

- 🔒 리다이렉트 처리 - AuthGuard
  - 토큰 검증 : 사용자의 인증 상태를 확인
  - 로그인/회원가입/할일 목록 페이지 리다이렉션


### 🔒 리다이렉트 처리 - AuthGuard

- 토큰 검증 : 사용자의 인증 상태를 확인
- 로그인/회원가입/할일 목록 페이지 리다이렉션

### 🧠 구현 과정에서의 배운 점 벨로그 보러가기 

[할 일 수정하기 구현 과정 보러가기](https://velog.io/@minngaeng/%EC%B5%9C%EC%A2%85-%EC%88%98%EC%A0%95%ED%95%98%EA%B8%B0) <br />
[state 렌더링에 따른 UI 변화 고민 과정 보러가기](https://velog.io/@minngaeng/%EC%9E%84%EC%8B%9C%EC%A0%80%EC%9E%A5) <br />
[목록을 재 렌더링 하는 과정에서 map vs filter 선택 하는 고민 과정 보러가기](https://velog.io/@minngaeng/Delete-map-VS-filter-...-which-method-is-the-right) <br />
['비동기 상태에 대해 조금 알게 되다!' 보러가기](https://velog.io/@minngaeng/%EC%95%84%EB%86%94-%EA%B8%80%EB%A9%B4-%EC%99%9C-setState%EC%97%90-%ED%95%A8%EA%BB%98-%EB%8B%B4%EC%95%84-Body-%EC%97%90-%EC%A0%84%EC%86%A1%ED%95%98%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94%EB%8D%B0) <br />
[새로운 TODO 추가할 때 컴포넌트 렌더링의 과정 이해하는 벨로그 보러가기 ](https://velog.io/@minngaeng/%EC%8A%A4%ED%94%84%EB%A0%88%EB%93%9C-%EC%97%B0%EC%82%B0%EC%9E%90%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B6%81%EA%B5%BC%ED%95%A8%EC%9D%84-%ED%92%80%EB%8B%A4) <br />
[스프레드 연산자로 기존의 목록과 새로운 목록을 합치는 과정 벨로그 보러가기](https://velog.io/@minngaeng/%EC%8A%A4%ED%94%84%EB%A0%88%EB%93%9C-%EC%97%B0%EC%82%B0%EC%9E%90%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B6%81%EA%B5%BC%ED%95%A8%EC%9D%84-%ED%92%80%EB%8B%A4) <br />
['리다이렉트 처리에 대해 배웠다!' 벨로그 보러라기](https://velog.io/@minngaeng/%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8A%B8-%EC%B2%98%EB%A6%AC-%EA%B7%B8%EA%B2%8C-%EB%AD%94%EB%8D%B0) <br />

### 디렉토리 구조

```bash
📦wanted_api
 ┣ 📂public
 ┃ ┣ 📂data
 ┃ ┣ 📂images
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📂AuthGuard : 로그인 여부에 따른 리다이렉트 처리 진행하는 폴어
 ┃ ┃ ┃ ┗ 📜AuthGuard.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂Signin
 ┃ ┃ ┣ 📂Signup
 ┃ ┃ ┗ 📂Todo
 ┃ ┣ 📂styles
 ┃ ┣ 📜Router.js
 ┃ ┣ 📜index.css
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json

```

#### 구현 과정에서의 배운 점 벨로그 보러가기 

❶ [할 일 수정하기 구현 과정 보러가기](https://velog.io/@minngaeng/%EC%B5%9C%EC%A2%85-%EC%88%98%EC%A0%95%ED%95%98%EA%B8%B0) <br />
❷ [state 렌더링에 따른 UI 변화 벨로그 보러가기](https://velog.io/@minngaeng/%EC%9E%84%EC%8B%9C%EC%A0%80%EC%9E%A5) <br />
❸ [목록을 재 렌더링 하는 과정에서 map vs filter 선택 하는 고민 과정 보러가기](https://velog.io/@minngaeng/Delete-map-VS-filter-...-which-method-is-the-right) <br />
❹['비동기 상태에 대해 조금 알게 되다!' 보러가기](https://velog.io/@minngaeng/%EC%95%84%EB%86%94-%EA%B8%80%EB%A9%B4-%EC%99%9C-setState%EC%97%90-%ED%95%A8%EA%BB%98-%EB%8B%B4%EC%95%84-Body-%EC%97%90-%EC%A0%84%EC%86%A1%ED%95%98%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94%EB%8D%B0) <br />
❺ [새로운 TODO 추가할 때 컴포넌트 렌더링의 과정 이해하는 벨로그 보러가기 ](https://velog.io/@minngaeng/%EC%8A%A4%ED%94%84%EB%A0%88%EB%93%9C-%EC%97%B0%EC%82%B0%EC%9E%90%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B6%81%EA%B5%BC%ED%95%A8%EC%9D%84-%ED%92%80%EB%8B%A4) <br />
❻ [스프레드 연산자로 기존의 목록과 새로운 목록을 합치는 과정 벨로그 보러가기](https://velog.io/@minngaeng/%EC%8A%A4%ED%94%84%EB%A0%88%EB%93%9C-%EC%97%B0%EC%82%B0%EC%9E%90%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B6%81%EA%B5%BC%ED%95%A8%EC%9D%84-%ED%92%80%EB%8B%A4) <br />
❼ ['리다이렉트 처리에 대해 배웠다!' 벨로그 보러라기](https://velog.io/@minngaeng/%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8A%B8-%EC%B2%98%EB%A6%AC-%EA%B7%B8%EA%B2%8C-%EB%AD%94%EB%8D%B0) <br />
