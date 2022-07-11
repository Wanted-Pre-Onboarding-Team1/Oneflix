import { getMoviesAPI } from 'lib/api/movieAPI';
import { useEffect, useState } from 'react';
import useIntersectObserver from './useIntersectObserver';

const useInfinityMovieLoad = (title = '', year = '') => {
  const [movieList, setMovieList] = useState([]);
  const { isTargetVisible, observeTargetRef } = useIntersectObserver();
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getMoviesAPI(title, year, pageNo);
        pageNo === 1
          ? setMovieList(response)
          : setMovieList((prev) => [...prev, ...response]);
        setPageNo(pageNo + 1);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error);
      }
    };
    getMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, year, isTargetVisible]);

  return { movieList, observeTargetRef };
};

export default useInfinityMovieLoad;
