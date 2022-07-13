import { getMoviesTitleAPI } from 'lib/api/movieAPI';
import { useEffect, useState } from 'react';

const useRecommendModel = (keyword) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMatchMovies = async () => {
      try {
        const response = await getMoviesTitleAPI(keyword);
        setMovies(response);
        console.log(response);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error);
      }
    };
    getMatchMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);
  const searchTitleData = movies?.map((movie) => movie.title);

  return { searchTitleData };
};

export default useRecommendModel;
