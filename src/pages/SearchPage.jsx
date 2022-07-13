import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import media from 'lib/styles/media';
import SearchInput from 'components/searchPage/SearchInput';
import MovieCard from 'components/movieCard/MovieCard';
import { useLocation } from 'react-router-dom';
import useInfinityMovieLoad from 'hooks/useInfinityMovieLoad';
import qs from 'qs';
import SortBox from 'components/searchPage/SortBox';

function SearchPage() {
  const movieListItem = useRef();
  const mainMovieList = useRef();

  const location = useLocation();
  const [sortBy, setSortBy] = useState('title');
  const onChangeSort = (event) => {
    setSortBy(event.target.value);
  };
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const { observeTargetRef, movieList } = useInfinityMovieLoad({
    queryTitle: query.title,
    queryYear: query.year,
    sort: sortBy,
    movieListItem,
    mainMovieList,
  });

  const requestedMovieList = movieList.map(
    ({ id, title, year, rating, medium_cover_image: image, like }, index) => {
      return (
        <li key={`${title}_${index}`} ref={movieListItem}>
          <MovieCard
            id={id}
            title={title}
            year={year}
            rating={rating}
            image={image}
            key={`${title}_${index}`}
            like={like}
          />
        </li>
      );
    },
  );
  return (
    <StyledSearchPage>
      <SearchInput />
      <StyledSearchSection>
        <SortBox sortBy={sortBy} onChangeSort={onChangeSort} />
        {movieList?.length === 0 ? (
          <StyledSerchText>검색결과가 없습니다.</StyledSerchText>
        ) : (
          <StyledSearchResults ref={mainMovieList}>
            {requestedMovieList}
          </StyledSearchResults>
        )}
      </StyledSearchSection>
      <LoadMark ref={observeTargetRef} />
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
  margin-top: 100px; //위치속성 다른 것으로
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
const LoadMark = styled.div`
  height: 40px;
`;
export default SearchPage;
