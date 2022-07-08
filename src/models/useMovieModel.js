import { HttpRequest } from 'lib/api/httpRequest';
import { useEffect, useState } from 'react';

const useMovieModel = () => {
  const [movies, setMovies] = useState(null);
  const request = new HttpRequest();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await request.get('/movies?_limit=50&_page=1');
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
