# [Wanted Pre Onboarding FE 5th] 팀 과제 # 1-2

- 주제: 영화 정보 사이트  
<img src="https://user-images.githubusercontent.com/73277502/178656762-a651e524-d0a2-4d4a-96ff-0d463c2ccfa1.svg" width=300px;/>

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

### # <a href="https://github.com/leejiho9898">이지호</a>

```
 - 프로젝트 초기 설정 
 - 검색 로직, 검색 정렬 작업
 - 연관 검색어 로직 작업 (debounce, fuzzy string matching)
 - <select> 태그 직접 구현
 - 검색 기준으로 검색(제목, 제작년도) 설정
```

### # <a href="https://github.com/godcl1623">이치행<a>

```
 - 상세 페이지 마크업
 - 즐겨찾기 페이지 데이터 표시 로직, 검색 로직
 - 무한 스크롤 로직의 동적 기능 추가
 - 상세 페이지 내 추천 영화 표시, 페이지 이동 로직
```

### # <a href="https://github.com/devMarco14">임종혁</a>

```
 - 검색 페이지 퍼블리싱
 - 검색 리스트 무한 스크롤 로직
 - 검색 페이지 무한스크롤 훅 생성
 - 즐겨찾기 페이지 생성
```

### # <a href="https://github.com/HyeonJu-C">천현주</a>

```
- 메인 페이지 퍼블리싱, 무한 스크롤 로직
- 사이드 메뉴 퍼블리싱
- 즐겨찾기 실시간 목록 렌더링
```

<br />

## **2. 기술 스택**

`react` `styled-components` `axios` `json server`

<br />

## **3. 프로젝트 소개**


- 프로젝트 기능 일람
  ![영화정보사이트](https://user-images.githubusercontent.com/99126860/177974656-33c24277-8c5b-410f-b6f8-e97836b0450d.jpg)


<br />

## **4. 프로젝트 구조**

```
📦public
 ┣ 📂assets
 ┃ ┗ 📜ONEFLIX.svg
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
 ┃ ┣ 📂detailModal
 ┃ ┃ ┗ 📜ModalMovieDetail.jsx
 ┃ ┣ 📂detailPage
 ┃ ┃ ┣ 📜NumericContent.jsx
 ┃ ┃ ┣ 📜RecommendMovies.jsx
 ┃ ┃ ┣ 📜Summary.jsx
 ┃ ┃ ┗ 📜TitleArea.jsx
 ┃ ┣ 📂likePage
 ┃ ┃ ┣ 📜LikeSearchInput.jsx
 ┃ ┃ ┗ 📜_LikeSearchInput.jsx
 ┃ ┣ 📂movieCard
 ┃ ┃ ┗ 📜MovieCard.jsx
 ┃ ┣ 📂searchPage
 ┃ ┃ ┣ 📜RecommendBox.jsx
 ┃ ┃ ┣ 📜SearchInput.jsx
 ┃ ┃ ┣ 📜SelectBox.jsx
 ┃ ┃ ┗ 📜SortBox.jsx
 ┃ ┗ 📂sideNavbar
 ┃ ┃ ┣ 📜SideNavbar.jsx
 ┃ ┃ ┗ 📜AppLayout.jsx
 ┣ 📂constants
 ┃ ┗ 📜index.js
 ┣ 📂database
 ┃ ┗ 📜database.json
 ┣ 📂hooks
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜useDebounce.js
 ┃ ┃ ┣ 📜useInput.js
 ┃ ┃ ┣ 📜useOutsideClick.js
 ┃ ┃ ┗ 📜useToggle.js
 ┃ ┣ 📜useDynamicScroll.js
 ┃ ┣ 📜useInfinityLikeLoad.js
 ┃ ┣ 📜useInfinityMovieLoad.js
 ┃ ┣ 📜useIntersectObserver.js
 ┃ ┣ 📜useLikeRecommendForm.js
 ┃ ┗ 📜useRecommendForm.js
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜httpRequest.js
 ┃ ┃ ┗ 📜movieAPI.js
 ┃ ┗ 📂styles
 ┃ ┃ ┣ 📜globalStyles.js
 ┃ ┃ ┣ 📜media.js
 ┃ ┃ ┗ 📜palette.js
 ┣ 📂models
 ┃ ┣ 📜useDetailModel.js
 ┃ ┣ 📜useLikeModel.js
 ┃ ┣ 📜useLikeRecommendModel.js
 ┃ ┣ 📜useMovieModel.js
 ┃ ┗ 📜useRecommendModel.js
 ┣ 📂pages
 ┃ ┣ 📜LandingPage.jsx
 ┃ ┣ 📜LikePage.jsx
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
3. 즐겨찾기 목록이 바뀔 때마다 페이지를 새로 렌더링하는 방법을 이용했을 때 무한 렌더링 발생
    - 원인 : 요청 => state 업데이트 => 요청 ... 무한으로 발생 
    - 해결 : js
    const callback = (response) => {
      const isSameLikeList =
        JSON.stringify(response.data) === JSON.stringify(movieList);
      if (isSameLikeList) return;
      setMovieList(response.data);
    };
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
