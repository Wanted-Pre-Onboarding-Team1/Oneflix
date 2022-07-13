# [Wanted Pre Onboarding FE 5th] 팀 과제 # 1-2

- 주제: 영화 정보 사이트
- 프로젝트 기간: 2022.07.07 ~ 2022.07.13

<br />

## **1. 팀원 소개 · 맡은 부분**

### # <a href="https://github.com/chaengs">심채영</a>

```
 - 상세 페이지 CSS 작성
 - 상세 페이지 JSON data 반영 작업
 - 영화 상세 페이지 모달창으로 변경 작업
 - 원플릭스 로고 디자인
```

### # 이지호

```
 - 검색 페이지
 - 검색 페이지 인풋, 연관 검색어 로직
```

### # 이치행

```
 - 상세 페이지 마크업
 - 작업 Merge, 리팩토링
```

### # 임종혁

```
 - 검색 페이지 퍼블리싱
 - 검색 리스트 무한 스크롤 로직
```

### # 천현주

```
- 메인 페이지 퍼블리싱, 무한 스크롤 로직
- 사이드 메뉴 퍼블리싱
```

<br />

## **2. 기술 스택**

`react` `styled-components` `axios` `json server`

<br />

## **3. 프로젝트 소개**

### # 2022.07.07

    - 기능, 업무 분담
    - 초기세팅 https://github.com/Wanted-Pre-Onboarding-Team1/Oneflix

- 프로젝트 기능 일람
  ![영화정보사이트](https://user-images.githubusercontent.com/99126860/177974656-33c24277-8c5b-410f-b6f8-e97836b0450d.jpg)

### # 2022.07.08

    - 중간 발표 전 merge
    - 마크업, 스타일 관련 크리티컬한 문제 해결: 앱 작동 방해 혹은 스타일이 통일되지 않는 문제
    - 코드 리팩토링 진행: 코드 스타일 통일, 변수명 수정
    - 추천검색어 로직 구현
    - json server 모듈화 진행

<br />

## **4. 프로젝트 구조**

```
📦public
 ┣ 📂assets
 ┃ ┗ 📂img
 ┃ ┃ ┗ 📜movieposter.jpeg
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜manifest.json
 ┗ 📜robots.txt
📦src
 ┣ 📂assets
 ┃ ┗ 📂imgs
 ┃ ┃ ┣ 📜SearchIcon.png
 ┃ ┃ ┗ 📜index.js
 ┣ 📂components
 ┃ ┣ 📂detailPage
 ┃ ┃ ┣ 📜Cnt.jsx
 ┃ ┃ ┣ 📜ProdCrew.jsx
 ┃ ┃ ┗ 📜TitleArea.jsx
 ┃ ┣ 📂likePage
 ┃ ┃ ┗ 📜LikePage.jsx
 ┃ ┣ 📂mainPage
 ┃ ┃ ┗ 📜MainPage.jsx
 ┃ ┣ 📂movieCard
 ┃ ┃ ┗ 📜MovieCard.jsx
 ┃ ┣ 📂sideNavbar
 ┃ ┃ ┣ 📜SideNavbar.jsx
 ┃ ┃ ┗ 📜SideNavbarLayout.jsx
 ┃ ┣ 📜RecommendBox.jsx
 ┃ ┗ 📜SearchInput.jsx
 ┣ 📂database
 ┃ ┗ 📜database.json
 ┣ 📂hooks
 ┃ ┗ 📂common
 ┃ ┃ ┗ 📜useInput.js
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜httpRequest.js
 ┃ ┗ 📂styles
 ┃ ┃ ┣ 📜globalStyles.js
 ┃ ┃ ┣ 📜media.js
 ┃ ┃ ┗ 📜palette.js
 ┣ 📂models
 ┃ ┗ 📜useMovieModel.js
 ┣ 📂pages
 ┃ ┣ 📜DetailPage.jsx
 ┃ ┣ 📜LandingPage.jsx
 ┃ ┗ 📜SearchPage.jsx
 ┣ 📂router
 ┃ ┗ 📜route.js
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

<br />

## **5. 컨벤션**

### # 협업을 위한 git 커밋 컨벤션 설정

| 커밋명   | 내용                                                   |
| -------- | ------------------------------------------------------ |
| feat     | 새로운 기능을 추가                                     |
| fix      | 버그 수정                                              |
| design   | CSS 등 사용자 UI 디자인 변경                           |
| docs     | 문서 생성, 추가, 수정(README.md)                       |
| refactor | 코드 리팩토링                                          |
| chore    | 간단한 코드 변경, 로직에 큰 영향을 주지 않는 작은 변경 |
| test     | 테스트 코드 추가 및 리팩토링                           |
| rename   | 파일 혹은 폴더명을 수정, 이동                          |
| !HOTFIX  | 치명적인 버그의 긴급한 수정                            |

<br />

## **6. 발생 에러**

### # merge, refactor 작업: 앱 작동을 방해하는 오류

```
1. 서버에서 데이터를 받아 화면을 표시하는 기능의 오작동
    - 원인: MainPage, useMovieModel에서 각각 axios.get에 사용하는 주소가 다르게 지정
    - 해결: 주소를 constants로 만들어 통일

2. SideNavBar가 모든 컴포넌트에서 표시되지 않는 문제
    - 원인: 라우팅 설정 문제
    - 해결: Route, Outlet을 사용한 중첩 라우팅 구성으로 해결
```

<br />

## **7. 프로젝트 설치 · 실행 방법**

### # 프로젝트 클론

```
$ git clone https://github.com/Wanted-Pre-Onboarding-Team1/Oneflix
```

### # 패키지 설치

```
$ npm install
```

### # develop 서버 실행

```
$ npm start
```

### # branch에서 작업

```
$ git checkout -b feature/page
```
