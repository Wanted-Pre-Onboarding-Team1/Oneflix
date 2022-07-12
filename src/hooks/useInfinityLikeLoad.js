import { HttpRequest } from 'lib/api/httpRequest';
import { useEffect, useState } from 'react';
import useIntersectObserver from './useIntersectObserver';

// 검색 목록 갱신을 위한 searchTarget
const useInfinityLikeLoad = (searchTarget) => {
  const [movieList, setMovieList] = useState([]);
  const [isInitialLoading, setInitialLoading] = useState(true);
  const { isTargetVisible, observeTargetRef } = useIntersectObserver();
  const movieRequest = new HttpRequest();

  const getCurrentPageNumber = (list) => {
    const pageNumber = list.length * 0.1;
    return Number.isInteger(pageNumber) ? pageNumber : Math.ceil(pageNumber);
  };

  useEffect(() => {
    const callback = (response) => setMovieList(response.data);

    // like=true 파라미터 추가로 즐겨찾기 항목에서만 검색 진행
    movieRequest.getWithParams({
      url: 'movies?like=true',
      // q: searchTarget 추가로 검색어 입력 후 해당 검색결과만 조회 가능
      config: { _page: getCurrentPageNumber(movieList), q: searchTarget },
      callback,
    });
    // dependency array에 searchTarget 추가로 세부 검색 페이지 -> /like 페이지로 이동시 검색 목록 갱신 가능
  }, [searchTarget, movieList]);

  useEffect(() => {
    getCurrentPageNumber(movieList) === 1 && setInitialLoading(false);
    const callback = ({ data }) => setMovieList((prev) => [...prev, ...data]);

    isTargetVisible &&
      !isInitialLoading &&
      movieRequest.getWithParams({
        // like=true 파라미터 추가로 즐겨찾기 항목에서만 검색 진행
        url: 'movies?like=true',
        /*
          q: searchTarget 추가로 검색어 입력 후 해당 검색결과만 조회 가능한 효과를 의도했으나, 아직 테스트를 진행하지 못함
        */
        config: { _page: getCurrentPageNumber(movieList) + 1, q: searchTarget },
        callback,
      });
  }, [isTargetVisible, isInitialLoading]);
  return { movieList, observeTargetRef };
};

export default useInfinityLikeLoad;
