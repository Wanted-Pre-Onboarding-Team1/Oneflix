import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MOVIES_AMOUNT_PER_PAGE } from 'constants';
import { palette } from 'lib/styles/palette';
import useIntersectObserver from 'hooks/useIntersectObserver';
import useDynamicScroll from 'hooks/useDynamicScroll';
import { HttpRequest } from 'lib/api/httpRequest';
import MovieCard from 'components/movieCard/MovieCard';

function LandingPage() {
  const [movieList, setMovieList] = useState([]);
  const [isInitialLoading, setInitialLoading] = useState(true);
  const { isTargetVisible, observeTargetRef } = useIntersectObserver();
  const movieRequest = new HttpRequest();
  const movieListItem = React.useRef();
  const mainMovieList = React.useRef();
  const { minimumLength } = useDynamicScroll(
    movieList,
    movieListItem,
    mainMovieList,
  );

  const getCurrentPageNumber = (currentMovieList) => {
    const pageNumber = minimumLength
      ? currentMovieList.length / minimumLength
      : currentMovieList.length / MOVIES_AMOUNT_PER_PAGE;
    return Number.isInteger(pageNumber) ? pageNumber : Math.ceil(pageNumber);
  };

  useEffect(() => {
    const callback = ({ data }) => setMovieList(data);

    movieRequest.getWithParams({
      url: 'movies',
      config: {
        _page: getCurrentPageNumber(movieList),
        _limit: minimumLength || MOVIES_AMOUNT_PER_PAGE,
      },
      callback,
    });
  }, [minimumLength]);

  useEffect(() => {
    getCurrentPageNumber(movieList) === 1 && setInitialLoading(false);
    const callback = ({ data }) =>
      setMovieList((prevMovieList) => [...prevMovieList, ...data]);

    isTargetVisible &&
      !isInitialLoading &&
      movieRequest.getWithParams({
        url: 'movies',
        config: {
          _page: getCurrentPageNumber(movieList) + 1,
          _limit: minimumLength || MOVIES_AMOUNT_PER_PAGE,
        },
        callback,
      });
  }, [isTargetVisible, isInitialLoading, minimumLength]);

  return (
    <LandingPageLayout>
      <LandingTitle>전체 영화 목록</LandingTitle>
      <MainPageContainer>
        <MainMovieList ref={mainMovieList}>
          {movieList.map(
            ({ id, title, year, rating, medium_cover_image: image, like }) => (
              <li key={`${title}_${id}`} ref={movieListItem}>
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
