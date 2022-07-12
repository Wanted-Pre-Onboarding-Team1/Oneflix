import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MovieCard from 'components/movieCard/MovieCard';
import LikeSearchInput from 'components/likePage/LikeSearchInput';
import useInfinityLikeLoad from 'hooks/useInfinityLikeLoad';
import { palette } from 'lib/styles/palette';
import media from 'lib/styles/media';

function LikePage() {
  // useInfinityLikeLoad에 검색어 전달을 위한 useParams
  const params = useParams();
  // useInfinityLikeLoad에 검색어 전달 -> 상세 검색 페이지에서 /like로 페이지 이동할 때 검색 목록을 갱신시키는 용도
  const { observeTargetRef, movieList } = useInfinityLikeLoad(params.title);

  const requestedMovieList = movieList?.map(
    ({ id, title, year, rating, medium_cover_image: image, like }, index) => {
      return (
        <MovieCard
          id={id}
          title={title}
          year={year}
          rating={rating}
          image={image}
          key={`${title}_${index}`}
          like={like}
        />
      );
    },
  );

  return (
    <StyledSearchPage>
      <LikeSearchInput />
      <StyledSearchSection>
        {movieList?.length === 0 ? (
          <StyledSerchText>즐겨찾기 항목이 없습니다.</StyledSerchText>
        ) : (
          <StyledSearchResults>{requestedMovieList}</StyledSearchResults>
        )}
      </StyledSearchSection>
      <div ref={observeTargetRef} />
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
