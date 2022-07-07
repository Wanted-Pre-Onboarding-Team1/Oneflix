import MovieCard from 'components/movieCard/MovieCard';
import React from 'react';
import styled from 'styled-components';

const MainPage = function (props) {
  return (
    <MainPageLayout>
      <ul>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
      </ul>
    </MainPageLayout>
  );
};

export default MainPage;

export const MainPageLayout = styled.section`
  width: 100%;
  padding: 90px 60px;

  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
