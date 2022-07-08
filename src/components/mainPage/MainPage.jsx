import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieCard from 'components/movieCard/MovieCard';
import { BASE_URL } from 'constants';
import useIntersectObserver from 'hooks/useIntersectObserver';

function MainPage() {
  const [movieList, setMovieList] = useState([]);
  const [isInitialLoading, setInitialLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { isTargetVisible, observeTargetRef } = useIntersectObserver();

  useEffect(() => {
    const getMovieList = async () => {
      const response = await axios.get(
        `${BASE_URL}/movies?_page=${currentPage}`,
      );
      const { data } = response;
      setMovieList([...data]);
    };

    getMovieList();
    // dependency 추가하면 무한 로딩 발생
  }, []);

  useEffect(() => {
    setInitialLoading(false);
    setCurrentPage((prev) => +prev + 1);

    async function getMoreMovies() {
      const response = await axios.get(
        `${BASE_URL}/movies?_page=${currentPage}`,
      );
      const { data } = response;
      setMovieList((prev) => [...prev, ...data]);
    }

    isTargetVisible && !isInitialLoading && getMoreMovies();
  }, [isTargetVisible, isInitialLoading]);

  return (
    <MainPageCnt>
      <MainMovieList>
        {movieList.map(
          ({
            imdb_code: id,
            title,
            year,
            rating,
            medium_cover_image: image,
          }) => (
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
        <div ref={observeTargetRef} />
      </MainMovieList>
    </MainPageCnt>
  );
}

export default MainPage;

export const MainPageCnt = styled.section`
  display: flex;
  flex-direction: column;
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
