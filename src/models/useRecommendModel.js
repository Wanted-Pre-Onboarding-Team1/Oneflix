import { getMoviesTitleAPI } from 'lib/api/movieAPI';
import { useEffect, useState } from 'react';

const useRecommendModel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getMoviesTitleAPI();
        setMovies(response);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error);
      }
    };
    getMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const searchTitleData = movies?.map((movie) => movie.title);
  return { searchTitleData };
};

export default useRecommendModel;
