import { HttpRequest } from 'lib/api/httpRequest';
import { useEffect, useState } from 'react';

const useLikeModel = (title, page = 1) => {
  const [movies, setMovies] = useState(null);
  const request = new HttpRequest();
  const titleToSearch = title || '';

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await request.get(
          `/movies?_limit=20&_page=${page}&q=${titleToSearch}&like=true`,
        );
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

export default useLikeModel;
