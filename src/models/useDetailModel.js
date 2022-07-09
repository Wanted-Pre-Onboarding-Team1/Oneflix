import { HttpRequest } from 'lib/api/httpRequest';
import { useEffect, useState } from 'react';

const useDetailModel = (id) => {
  const [movies, setMovies] = useState(null);
  const request = new HttpRequest();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await request.get(`/movies?id=${id}`);
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

export default useDetailModel;
