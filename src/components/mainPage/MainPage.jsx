import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieCard from 'components/movieCard/MovieCard';
import useIntersectObserver from 'hooks/useIntersectObserver';
import { HttpRequest } from 'lib/api/httpRequest';

function MainPage() {
  const [movieList, setMovieList] = useState([]);
  const [isInitialLoading, setInitialLoading] = useState(true);
  const { isTargetVisible, observeTargetRef } = useIntersectObserver();
  const movieRequest = new HttpRequest();

  const getCurrentPageNumber = (list) => {
    const pageNumber = list.length * 0.1;
    return Number.isInteger(pageNumber) ? pageNumber : Math.ceil(pageNumber);
  };

  useEffect(() => {
    const callback = (response) => setMovieList(response.data);

    movieRequest.getWithParams({
      url: 'movies',
      config: { _page: getCurrentPageNumber(movieList) },
      callback,
    });
  }, []);

  useEffect(() => {
    getCurrentPageNumber(movieList) === 1 && setInitialLoading(false);
    const callback = ({ data }) => setMovieList((prev) => [...prev, ...data]);

    isTargetVisible &&
      !isInitialLoading &&
      movieRequest.getWithParams({
        url: 'movies',
        config: { _page: getCurrentPageNumber(movieList) + 1 },
        callback,
      });
  }, [isTargetVisible, isInitialLoading]);

  useEffect(() => {
    movieRequest.get('/movies?like=true').then((res) => console.log(res));
  }, []);

  return (
    <MainPageCnt>
      <MainMovieList>
        {movieList.map(
          ({ id, title, year, rating, medium_cover_image: image, like }) => (
            <li key={`${title}_${id}`}>
              <MovieCard
                id={id}
                title={title}
                year={year}
                rating={rating}
                image={image}
                like={like}
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
