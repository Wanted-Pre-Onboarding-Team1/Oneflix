import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import useIntersectObserver from 'hooks/useIntersectObserver';
import { HttpRequest } from 'lib/api/httpRequest';
import MovieCard from 'components/movieCard/MovieCard';

const MOVIE_PER_PAGE = 10;

function LandingPage() {
  const [movieList, setMovieList] = useState([]);
  const [isInitialLoading, setInitialLoading] = useState(true);
  const { isTargetVisible, observeTargetRef } = useIntersectObserver();
  const movieRequest = new HttpRequest();

  const getCurrentPageNumber = (currentMovieList) => {
    const pageNumber = currentMovieList.length / MOVIE_PER_PAGE;
    return Number.isInteger(pageNumber) ? pageNumber : Math.ceil(pageNumber);
  };

  useEffect(() => {
    const callback = (response) => setMovieList(response.data);

    movieRequest.getWithParams({
      url: 'movies',
      config: {
        _page: getCurrentPageNumber(movieList),
        _limit: MOVIE_PER_PAGE,
      },
      callback,
    });
  }, []);

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
          _limit: MOVIE_PER_PAGE,
        },
        callback,
      });
  }, [isTargetVisible, isInitialLoading]);

  return (
    <LandingPageLayout>
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
        </MainMovieList>
        <div ref={observeTargetRef} />
      </MainPageCnt>
    </LandingPageLayout>
  );
}

export default LandingPage;

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

const LandingPageLayout = styled.div`
  display: flex;
  width: 100%;
  background: ${palette.backgroundColor};
`;
