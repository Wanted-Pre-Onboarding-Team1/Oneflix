import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieCard from 'components/movieCard/MovieCard';
import { BASE_URL } from 'constants';

function MainPage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      const response = await axios.get(`${BASE_URL}/movies?_page=1`);
      const { data } = response;
      setMovieList([...data]);
    };

    getMovieList();
  }, []);

  return (
    <MainPageCnt>
      <MainMovieList>
        {movieList.map(
          ({ id, title, year, rating, medium_cover_image: image }) => (
            <li key={`${title}_${id}`}>
              <MovieCard
                id={id}
                title={title}
                year={year}
                rating={rating}
                image={image}
              />
            </li>
          ),
        )}
      </MainMovieList>
    </MainPageCnt>
  );
}

export default MainPage;

export const MainPageCnt = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 90px 30px;
`;
const MainMovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;
