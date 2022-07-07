import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function SearchPage() {
  return (
    <StyledSearchPage>
      <StyledSearchSection>
        <StyledSerchText>검색결과가 없습니다.</StyledSerchText>
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
      </StyledSearchSection>
    </StyledSearchPage>
  );
}

const StyledSearchPage = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const StyledSearchSection = styled.div`
  width: 75%;
  height: 100%;
  background-color: ${palette.backgroundColor};
  opacity: 0.9;
`;

const StyledSerchText = styled.div`
  color: ${palette.fontColor};
  margin: 0 60px;
  font-size: 32px;
`;

const StyledSearchResults = styled.div`
  margin: 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
`;

const StyledSearchResult = styled.div`
  width: 75%;
  height: 340px;
  margin: 20px auto;
  background-color: #353535;
`;

export default SearchPage;
