import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import media from 'lib/styles/media';
import SearchInput from 'components/SearchInput';
import useMovieModel from 'models/useMovieModel';
import MovieCard from 'components/movieCard/MovieCard';

function SearchPage() {
  const [movieList, setMovieList] = useState([1, 2, 3]);
  const { movies } = useMovieModel();
  console.log(movies);
  const requestedMovieList = movies?.data.map(
    ({ id, title, year, rating, medium_cover_image: image }, index) => {
      return (
        <MovieCard
          id={id}
          title={title}
          year={year}
          rating={rating}
          image={image}
          key={`${title}_${index}`}
        />
      );
    },
  );

  return (
    <StyledSearchPage>
      <SearchInput />
      <StyledSearchSection>
        {movieList.length === 0 ? (
          <StyledSerchText>검색결과가 없습니다.</StyledSerchText>
        ) : (
          <StyledSearchResults>{requestedMovieList}</StyledSearchResults>
        )}
      </StyledSearchSection>
    </StyledSearchPage>
  );
}

const StyledSearchPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledSearchSection = styled.div`
  background-color: ${palette.backgroundColor};
  width: 75vw;
  height: 100vh;
  margin: 0 auto;
  ${media.medium} {
    height: 100%;
  }
  ${media.small} {
    height: 100%;
  }
  ${media.custom(576)} {
    height: 100%;
  }
`;

const StyledSerchText = styled.div`
  display: flex;
  justify-content: center;
  color: ${palette.fontColor};
  font-size: 2.2rem;
`;

const StyledSearchResults = styled.div`
  margin: 0px 40px;
  display: grid;

  grid-template-columns: repeat(5, 1fr);
  ${media.medium} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${media.small} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.custom(576)} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default SearchPage;
