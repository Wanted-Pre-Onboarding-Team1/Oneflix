import { HttpRequest } from 'lib/api/httpRequest';
import { useEffect, useState } from 'react';
import useIntersectObserver from './useIntersectObserver';
import useDynamicScroll from './useDynamicScroll';

const MOVIE_PER_PAGE = 10;

const useInfinityLikeLoad = ({ paramTitle, movieListItem, mainMovieList }) => {
  const [movieList, setMovieList] = useState([]);
  const [isInitialLoading, setInitialLoading] = useState(true);
  const { isTargetVisible, observeTargetRef } = useIntersectObserver();
  const movieRequest = new HttpRequest();
  const { minimumLength } = useDynamicScroll(
    movieList,
    movieListItem,
    mainMovieList,
  );

  const getCurrentPageNumber = (list) => {
    const pageNumber = minimumLength
      ? list.length / minimumLength
      : list.length * 0.1;
    return Number.isInteger(pageNumber) ? pageNumber : Math.ceil(pageNumber);
  };

  useEffect(() => {
    const callback = (response) => {
      const isSameLikeList =
        JSON.stringify(response.data) === JSON.stringify(movieList);
      if (isSameLikeList) return;
      setMovieList(response.data);
    };

    movieRequest.getWithParams({
      url: 'movies?like=true',
      config: {
        _page: getCurrentPageNumber(movieList),
        _limit: minimumLength || MOVIE_PER_PAGE,
        q: paramTitle,
      },
      callback,
    });
<<<<<<< HEAD
  }, [paramTitle, minimumLength]);
=======
    // dependency array에 searchTarget 추가로 세부 검색 페이지 -> /like 페이지로 이동시 검색 목록 갱신 가능
  }, [searchTarget, movieList]);
>>>>>>> dc694d8063154d071a6b035031a4ce6df228de49

  useEffect(() => {
    getCurrentPageNumber(movieList) === 1 && setInitialLoading(false);
    const callback = ({ data }) => setMovieList((prev) => [...prev, ...data]);

    isTargetVisible &&
      !isInitialLoading &&
      movieRequest.getWithParams({
        url: 'movies?like=true',
        config: {
          _page: getCurrentPageNumber(movieList) + 1,
          q: paramTitle,
          _list: minimumLength || MOVIE_PER_PAGE,
        },
        callback,
      });
  }, [isTargetVisible, isInitialLoading, minimumLength]);

  return { movieList, observeTargetRef };
};

export default useInfinityLikeLoad;
