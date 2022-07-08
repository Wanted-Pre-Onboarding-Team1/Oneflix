# [Wanted Pre Onboarding FE 5th] 팀 과제 # 1-2
- 주제: 영화 정보 사이트
- 프로젝트 기간: 2022.07.07 ~ 2022.07.13
## 1. 팀원 소개 맡은 부분
### 심채영
```
 - 상세페이지
```
### 이지호
```
 - 검색 페이지
 - 검색페이지 인풋, 연관검색어
```
### 이치행
```
 - 상세페이지
```
 ### 임종혁
```
 - 검색페이지 퍼블리싱
 - 검색리스트 무한스크롤
``` 
### 천현주
```
- 상세페이지
```
## 2. 기술 스택

`react` `styled-components` `axios` `json server` 

## 3. 프로젝트 소개
### 2022.07.07
    - 기능, 업무분담
    - 초기세팅 https://github.com/Wanted-Pre-Onboarding-Team1/Oneflix
   ![영화정보사이트](https://user-images.githubusercontent.com/99126860/177974656-33c24277-8c5b-410f-b6f8-e97836b0450d.jpg)

### 2022.07.08
    - 중간발표 전 merge
    - 마크업, 스타일 관련 크리티컬한 문제 해결: 앱 작동 방해 혹은 스타일이 통일되지 않는 문제
    - 코드 리팩토링 진행: 코드 스타일 통일, 변수명 수정
    - 추천검색어 로직
    - json server 모듈화
    
## 4. 프로젝트 구조

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
 ┃ ┃ ┣ 📜NumericCnt.jsx
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
 
## 5. 컨벤션
### 협업을 위한 git 커밋컨벤션 설정
| 커밋명      | 내용                                             |
| ----------- | ------------------------------------------------ |
| feat     | 새로운 기능을 추가할 경우                     |
| fix      | 버그를 고친 경우                                        |
| design    | CSS 등 사용자 UI 디자인 변경                              |
| docs     | 문서 생성, 추가, 수정(README.md)                 |
| refactor | 코드 리팩토링                                |
| chore   | 간단한 코드 변경, 로직에 큰 영향을 주지 않을 작은 변경이 있을 경우 |
| refactor | 코드 리팩토링                                |
| test | 테스트 코드 추가 및 테스트 코드 리팩토링                     |
| rename |파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우|
| !HOTFIX |급하게 치명적인 버그를 고쳐야하는 경우|

## 6. 에러
### merge, refactor 작업 중에 앱 작동을 방해하는 오류
```
1. 서버에서 데이터를 받아 화면을 표시하는 기능의 오작동
    - 원인: MainPage, useMovieModel에서 각각 axios.get에 사용하는 주소가 다르게 지정
    - 해결: 주소를 constants로 만들어 통일
2. SideNavBar가 모든 컴포넌트에서 표시되지 않는 문제
    - 원인: 라우팅 설정 문제
    - 해결: Route, Outlet을 사용한 중첩 라우팅 구성으로 해결    
```
## 7. 프로젝트 설치 및 실행 방법
### 프로젝트 클론
```
$ git clone https://github.com/Wanted-Pre-Onboarding-Team1/Oneflix
```
### 패키지 설치
```
$ npm install 
```
### develop 서버 실행
```
$ npm start
```
### branch에서 작업
```
$ git checkout -b feature/page
```
