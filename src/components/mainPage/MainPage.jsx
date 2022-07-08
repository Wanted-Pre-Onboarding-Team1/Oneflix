import axios from 'axios';
import MovieCard from 'components/movieCard/MovieCard';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DOMAIN = 'http://localhost:8000/';

const MainPage = function () {
  const [MovieList, setMovieList] = useState([]);
  useEffect(() => {
    const getMovieList = async () => {
      const response = await axios.get(`${DOMAIN}movies?_page=1`);
      const { data } = response;
      console.log(data);
      setMovieList([...data]);
    };

    getMovieList();
  }, []);

  return (
    <MainPageLayout>
      <ul>
        {MovieList.map(
          ({
            imdb_code: id,
            title,
            year,
            rating,
            medium_cover_image: image,
          }) => (
            <li key={id}>
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
      </ul>
    </MainPageLayout>
  );
};

export default MainPage;

export const MainPageLayout = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 90px 30px;

  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
`;
