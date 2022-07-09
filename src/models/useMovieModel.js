import { getMoviesAPI } from 'lib/api/movieAPI';
import { useEffect, useState } from 'react';

const useMovieModel = (title, page = 1) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getMoviesAPI(title, page);
        setMovies(response);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error);
      }
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { movies };
};

export default useMovieModel;
