import { HttpRequest } from 'lib/api/httpRequest';
import { useEffect, useState } from 'react';
import { MOVIES_AMOUNT_PER_PAGE } from 'constants';
import useIntersectObserver from './useIntersectObserver';
import useDynamicScroll from './useDynamicScroll';

const useInfinityMovieLoad = ({
  queryTitle,
  queryYear,
  sort,
  movieListItem,
  mainMovieList,
}) => {
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
      : list.length / MOVIES_AMOUNT_PER_PAGE;
    return Number.isInteger(pageNumber) ? pageNumber : Math.ceil(pageNumber);
  };

  useEffect(() => {
    const callback = (response) => setMovieList(response.data);

    (queryTitle || queryYear) &&
      movieRequest.getWithParams({
        url: 'movies',
        config: {
          _page: getCurrentPageNumber(movieList),
          _limit: minimumLength || MOVIES_AMOUNT_PER_PAGE,
          title_like: queryTitle,
          year_like: queryYear,
          _sort: sort,
          _order: 'desc',
        },
        callback,
      });
  }, [queryTitle, queryYear, sort, minimumLength]);

  useEffect(() => {
    getCurrentPageNumber(movieList) === 1 && setInitialLoading(false);
    const callback = ({ data }) => setMovieList((prev) => [...prev, ...data]);

    isTargetVisible &&
      !isInitialLoading &&
      movieRequest.getWithParams({
        url: 'movies',
        config: {
          _page: getCurrentPageNumber(movieList) + 1,
          q: queryTitle,
          year_like: queryYear,
          _limit: minimumLength || MOVIES_AMOUNT_PER_PAGE,
        },
        callback,
      });
  }, [isTargetVisible, isInitialLoading, minimumLength]);
  return { movieList, observeTargetRef };
};

export default useInfinityMovieLoad;
