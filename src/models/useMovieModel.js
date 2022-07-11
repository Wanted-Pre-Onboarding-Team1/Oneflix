import { getMoviesAPI } from 'lib/api/movieAPI';
import { useEffect, useState } from 'react';

const useMovieModel = (title = '', year = '', page = 1) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getMoviesAPI(title, year, page);
        setMovies(response);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error);
      }
    };
    getMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, year, page]);
  return { movies };
};

export default useMovieModel;
