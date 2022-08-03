import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { MOVIES_AMOUNT_PER_PAGE } from 'constants';
import { palette } from 'lib/styles/palette';
import useIntersectObserver from 'hooks/useIntersectObserver';
import MovieCard from 'components/movieCard/MovieCard';
import { request } from 'lib/api/movieAPI';

function LandingPage() {
  const [movieList, setMovieList] = useState([]);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const { isTargetVisible, observeTargetRef } = useIntersectObserver();
  const movieRequest = useMemo(() => request, []);

  const getCurrentPageNumber = (currentMovieList) => {
    const pageNumber = currentMovieList.length / MOVIES_AMOUNT_PER_PAGE;
    return Number.isInteger(pageNumber) ? pageNumber : Math.ceil(pageNumber);
  };
  const currentPage = getCurrentPageNumber(movieList);

  useEffect(() => {
    const callback = ({ data }) => {
      setMovieList(data);
      setIsInitialLoading(false);
    };

    movieRequest.getWithParams({
      url: 'movies',
      config: {
        _page: 1,
        _limit: MOVIES_AMOUNT_PER_PAGE,
      },
      callback,
    });
  }, [movieRequest]);

  useEffect(() => {
    const callback = ({ data }) =>
      setMovieList((prevMovieList) => [...prevMovieList, ...data]);

    isTargetVisible &&
      !isInitialLoading &&
      movieRequest.getWithParams({
        url: 'movies',
        config: {
          _page: currentPage + 1,
          _limit: MOVIES_AMOUNT_PER_PAGE,
        },
        callback,
      });
  }, [isTargetVisible, isInitialLoading, currentPage, movieRequest]);

  return (
    <LandingPageLayout>
      <LandingTitle>전체 영화 목록</LandingTitle>
      <MainPageContainer>
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
                  isLanding
                />
              </li>
            ),
          )}
        </MainMovieList>
        <div ref={observeTargetRef} />
      </MainPageContainer>
    </LandingPageLayout>
  );
}

export default LandingPage;

export const MainPageContainer = styled.section`
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

const LandingPageLayout = styled.div`
  width: 100%;
  background: ${palette.backgroundColor};
`;

const LandingTitle = styled.h1`
  margin: 50px 10px 0 10px;
  font-size: 24px;
  text-align: center;
  color: ${palette.fontColor};
`;
