import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import media from 'lib/styles/media';
import SearchInput from 'components/SearchInput';
import useMovieModel from 'models/useMovieModel';

/* 데이터가 없을 시 "검색결과가 없습니다"
있을 시 결과 리스트 
데이터가 10개 이상이면 무한스크롤
무한스크롤 코드는 훅으로
*/

function SearchPage() {
  const [movieList, setMovieList] = useState([1, 2, 3]);
  const { movies } = useMovieModel();

  return (
    <StyledSearchPage>
      <SearchInput />
      <StyledSearchSection>
        {movieList.length === 0 ? (
          <StyledSerchText>검색결과가 없습니다.</StyledSerchText>
        ) : (
          <StyledSearchResults>
            <StyledSearchResult>1</StyledSearchResult>
            <StyledSearchResult>2</StyledSearchResult>
            <StyledSearchResult>3</StyledSearchResult>
            <StyledSearchResult>4</StyledSearchResult>
            <StyledSearchResult>5</StyledSearchResult>
            <StyledSearchResult>6</StyledSearchResult>
            <StyledSearchResult>7</StyledSearchResult>
            <StyledSearchResult>8</StyledSearchResult>
            <StyledSearchResult>9</StyledSearchResult>
            <StyledSearchResult>10</StyledSearchResult>
          </StyledSearchResults>
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
  width: 80vw;
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

const StyledSearchResult = styled.div`
  min-width: 150px;
  min-height: 340px;
  margin: 20px auto;
  background-color: #353535;
`;

export default SearchPage;
