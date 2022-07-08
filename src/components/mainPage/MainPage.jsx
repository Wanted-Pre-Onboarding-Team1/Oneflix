import axios from 'axios';
import MovieCard from 'components/movieCard/MovieCard';
import useIntersectObserver from 'hooks/useIntersectObserver';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DOMAIN = 'http://localhost:8080/';

const MainPage = function () {
  const [MovieList, setMovieList] = useState([]);
  const [isInitialLoading, setInitialLoading] = useState(true);
  const { isTargetVisible, observeTargetRef } = useIntersectObserver();

  useEffect(() => {
    const getMovieList = async () => {
      const response = await axios.get(`${DOMAIN}movies?_page=1`);
      const { data } = response;
      setMovieList([...data]);
    };

    getMovieList();
  }, []);

  useEffect(() => {
    setInitialLoading(false);

    const getMoreMovies = async () => {
      const response = await axios.get(`${DOMAIN}movies?_page=2`);
      const { data } = response;
      setMovieList((prev) => [...prev, ...data]);
    };

    isTargetVisible && !isInitialLoading && getMoreMovies();
  }, [isTargetVisible, isInitialLoading]);

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
      <div ref={observeTargetRef}>observe target</div>
    </MainPageLayout>
  );
};

export default MainPage;

export const MainPageLayout = styled.section`
  display: flex;
  flex-direction: column;
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
