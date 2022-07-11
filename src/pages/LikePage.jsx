import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import media from 'lib/styles/media';
import SearchInput from 'components/searchPage/SearchInput';
import useMovieModel from 'models/useMovieModel';
import MovieCard from 'components/movieCard/MovieCard';
import { useParams } from 'react-router-dom';

function LikePage() {
  const params = useParams();
  const { movies } = useMovieModel(params.title, 1);
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
        {movies?.data.length === 0 ? (
          <StyledSerchText>즐겨찾기 한 항목이 없습니다.</StyledSerchText>
        ) : (
          <StyledSearchResults>{requestedMovieList}</StyledSearchResults>
        )}
      </StyledSearchSection>
    </StyledSearchPage>
  );
}

const { backgroundColor, fontColor } = palette;

const StyledSearchPage = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
`;
const StyledSearchSection = styled.div`
  background-color: ${backgroundColor};
  width: 75vw;
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
  margin-top: 50%; //위치속성 다른 것으로
  display: flex;
  justify-content: center;
  color: ${fontColor};
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

export default LikePage;
