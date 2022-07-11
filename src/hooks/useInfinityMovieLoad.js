import { HttpRequest } from 'lib/api/httpRequest';
import { useEffect, useState } from 'react';
import useIntersectObserver from './useIntersectObserver';

const MOVIE_PER_PAGE = 10;
const useInfinityMovieLoad = (title, year) => {
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

    movieRequest.getWithParams({
      url: 'movies',
      config: {
        _page: getCurrentPageNumber(movieList),
        _limit: MOVIE_PER_PAGE,
        q: title,
        year_like: year,
      },
      callback,
    });
  }, [title, year]);

  useEffect(() => {
    getCurrentPageNumber(movieList) === 1 && setInitialLoading(false);
    const callback = ({ data }) => setMovieList((prev) => [...prev, ...data]);

    isTargetVisible &&
      !isInitialLoading &&
      movieRequest.getWithParams({
        url: 'movies',
        config: {
          _page: getCurrentPageNumber(movieList) + 1,
          q: title,
          year_like: year,
        },
        callback,
      });
  }, [isTargetVisible, isInitialLoading]);
  return { movieList, observeTargetRef };
};

export default useInfinityMovieLoad;
