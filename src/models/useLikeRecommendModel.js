import { getLikesTitleAPI } from 'lib/api/movieAPI';
import { useEffect, useState } from 'react';

const useLikeRecommendModel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getLikesTitleAPI();
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

export default useLikeRecommendModel;
