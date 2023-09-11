# wanted 프리온보딩 과제 api 를 이용한 todoList 실습

## 주요 기능 구현 소요 기간

> **2023.08.21 ~ 2023.08.25**

## 기능 소개
- 회원가입
- 로그인
- TODO LIST
  - 추가/삭제/수정 기능
- 리다이렉트 처리


## 시작 가이드

### Installation

```bash
$ git clone 
$ npm install
$ npm start
```

---

## 주요 기능 📦

### 📝 회원가입 

<img width="400" alt="스크린샷 2023-09-10 오후 12 05 26" src="https://github.com/minngaeng/wanted_api/assets/124495210/7a72773e-5637-47e4-86b3-f229353c539e">

- 통신 : `axios`를 사용해 API와 연동. 성공 시 로그인 페이지로 이동. 중복 가입 시 경고 메시지 출력.

### 🏘️ 로그인

<img width="400" alt="스크린샷 2023-09-10 오후 12 05 34" src="https://github.com/minngaeng/wanted_api/assets/124495210/3298e5fe-09a8-45a4-ae8c-5457143d9c37">

![글 작성 페이지](https://github.com/Woori-Dongne/frontend-react/assets/78401083/fc3e7d4a-aed4-4a1e-b46a-3236aec4120a)

- 입력 : 유효한 이메일과 8 자리 이상의 비밀번호 입력.
- 통신 : `axios` 를 사용하여 API 와 연동하여 로그인 처리를 진행.
  - 로그인 성공 시 : 토큰을 로컬 스토리지에 저장하고 할 일 목록 페이지로 이동.
  - 실패 시 : 오류 메시지를 출력하며, 해당 사용자가 없을 경우 회원 가입 권장.
- 타이틀, 카테고리, 지역, 인원, 날짜 데이터를 통한 게시글 작성 및 채팅방 개설
- S3를 통한 이미지 업로드 기능
- 게시글 수정시 게시글의 id만으로 해당 글에 대한 데이터가 보여질 수 있도록 구현

### 🏘️ Todo List

![채팅방](https://github.com/Woori-Dongne/frontend-react/assets/78401083/a01af4ad-704c-409c-a5c2-219179543477)

- WebSocket 통신 방식을 이용한 유저간의 채팅 기능
- 나를 제외한 다른 유저를 친구로 등록하거나 신고하는 기능

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
