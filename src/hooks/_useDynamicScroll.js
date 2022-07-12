import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MovieCard from 'components/movieCard/MovieCard';
import useIntersectObserver from 'hooks/useIntersectObserver';
import { HttpRequest } from 'lib/api/httpRequest';

function MainPage() {
  const [movieList, setMovieList] = useState([]);
  // minimumLength: 현재 화면 크기에 최소한으로 필요한 아이템 개수
  const [minimumLength, setMinimumLength] = useState();
  const [isInitialLoading, setInitialLoading] = useState(true);
  const { isTargetVisible, observeTargetRef } = useIntersectObserver();
  const movieRequest = new HttpRequest();
  // movieListItem: li 개별 아이템
  const movieListItem = useRef();
  // mainMovieList: li 아이템을 담는 ul 요소
  const mainMovieList = useRef();

  const getCurrentPageNumber = (list) => {
    /*
      pageNumber:
        - _limit 파라미터 없는 기본 검색 결과 개수는 10개이므로, minimumLength가 없을 때는 10개를 기준으로 pageNumber 산출
        - minimumLength가 있을 때는 해당 값을 기준으로 pageNumber 산출
    */
    const pageNumber = minimumLength
      ? list.length / minimumLength
      : list.length * 0.1;
    return Number.isInteger(pageNumber) ? pageNumber : Math.ceil(pageNumber);
  };

  // minimumLength를 설정하는 useEffect
  useEffect(() => {
    // 리스트 아이템이 있을 때
    if (movieListItem.current) {
      // maxColumn: 화면에 세로 방향으로 최대한 표시 가능한 아이템 개수
      const maxColumn = Math.ceil(
        window.innerHeight / movieListItem.current.clientHeight,
      );
      // maxRow: 화면에 가로 방향으로 최대한 표시 가능한 아이템 개수(ul 너비 기준)
      const maxRow = Math.floor(
        mainMovieList.current.clientWidth / movieListItem.current.clientWidth,
      );
      // minimumNeededLength: 세로 개수 * 가로 개수
      const minimumNeededLength = maxColumn * maxRow;
      // 현재 불러와진 아이템 개수(= movieList.length)가 최소로 필요한 개수(minimumNeededLength)보다 적을 경우 minimumLength를 업데이트
      if (movieList.length < minimumNeededLength) {
        setMinimumLength(minimumNeededLength);
      }
    }
  }, [movieListItem.current]);

  useEffect(() => {
    const callback = (response) => setMovieList(response.data);

    movieRequest.getWithParams({
      url: 'movies',
      // minimumLength가 없을 때는 기본 10개를 검색, 있을 경우 해당 값 사용
      config: { _page: getCurrentPageNumber(movieList), _limit: minimumLength },
      callback,
    });
    // 화면 크기 변경을 감지하기 위한 dependency array
  }, [minimumLength]);

  useEffect(() => {
    getCurrentPageNumber(movieList) === 1 && setInitialLoading(false);
    const callback = ({ data }) => setMovieList((prev) => [...prev, ...data]);

    isTargetVisible &&
      !isInitialLoading &&
      movieRequest.getWithParams({
        url: 'movies',
        config: {
          _page: getCurrentPageNumber(movieList) + 1,
          // minimumLength가 없을 때는 기본 10개를 검색, 있을 경우 해당 값 사용
          _limit: minimumLength,
        },
        callback,
      });
    // 화면 크기 변경을 감지하기 위한 dependency array
  }, [isTargetVisible, isInitialLoading, minimumLength]);

  return (
    <MainPageCnt>
      <MainMovieList ref={mainMovieList}>
        {movieList.map(
          ({ id, title, year, rating, medium_cover_image: image, like }) => (
            <li key={`${title}_${id}`} ref={movieListItem}>
              <MovieCard
                id={id}
                title={title}
                year={year}
                rating={rating}
                image={image}
              />
            </li>
          ),
        )}
      </MainMovieList>
      <div ref={observeTargetRef} />
    </MainPageCnt>
  );
}

export default MainPage;

export const MainPageCnt = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 90px 30px;
`;
const MainMovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;
