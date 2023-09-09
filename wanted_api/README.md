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

### 🏘️ 소셜 로그인 (카카오톡)

![카카오톡 로그인](https://github.com/Woori-Dongne/frontend-react/assets/78401083/f7f281e8-9e54-4137-91bf-a07208895195)

- 소셜 로그인 (카카오톡)을 이용해 사용자의 접근성과 편리함을 높임
- 처음 가입하는 유저에게는 추가 정보 (닉네임, 상세 주소, 핸드폰 번호)를 입력하도록 설정
- 기존 유저에게는 추가 정보를 기입하는 프로세스를 제거

### 🏘️ 게시글 작성 기능

![글 작성 페이지](https://github.com/Woori-Dongne/frontend-react/assets/78401083/fc3e7d4a-aed4-4a1e-b46a-3236aec4120a)

- 타이틀, 카테고리, 지역, 인원, 날짜 데이터를 통한 게시글 작성 및 채팅방 개설
- S3를 통한 이미지 업로드 기능
- 게시글 수정시 게시글의 id만으로 해당 글에 대한 데이터가 보여질 수 있도록 구현

### 🏘️ 채팅 기능

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
