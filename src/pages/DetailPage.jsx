import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TitleArea from 'components/detailPage/TitleArea';
import NumericCnt from 'components/detailPage/NumericCnt';
import ProdCrew from 'components/detailPage/ProdCrew';
import RecommendMovies from 'components/detailPage/RecommendMovies';
import useDetailModel from 'models/useDetailModel';
import { palette } from 'lib/styles/palette';

export default function DetailPage() {
  const [movieMetaData, setmovieMetaData] = useState(null);

  const paramId = useParams().id.slice();
  const movies = useDetailModel(paramId);
  // requestedGenres: 동일 장르 검색을 위해 사용
  const requestedGenres = useDetailModel('Action', 'genres');
  // genreSearchResult: 장르 목록을 저장하기 위한 ref. state 사용시 무한 렌더링 발생
  const genreSearchResult = useRef();

  useEffect(() => {
    if (movies.movies) {
      const movie = movies.movies?.data[0];
      setmovieMetaData(movie);
    }
  }, [movies]);

  // 추천 영화 목록 업데이트를 위한 useEffect
  useEffect(() => {
    if (requestedGenres.movies) {
      const initialResponse = requestedGenres.movies?.data;
      const isListContainsCurrentId = initialResponse.find(
        (movieData) => movieData.id === Number(paramId),
      );
      // 추천 영화 목록에 현재 페이지가 있을 경우 제외
      if (isListContainsCurrentId) {
        genreSearchResult.current = initialResponse
          .filter((movieData) => movieData.id !== Number(paramId))
          .slice(0, 4);
        // 추천 영화 목록에 현재 페이지가 없을 경우
      } else {
        genreSearchResult.current = initialResponse.slice(0, 4);
      }
    }
    // 목록을 비우기 위한 clean up
    return () => {
      genreSearchResult.current = undefined;
    };
  }, [requestedGenres]);

  return (
    <DetailsCnt>
      {movieMetaData && (
        <>
          <MoviePosterBox>
            <MoviePoster src={movieMetaData.medium_cover_image} />
          </MoviePosterBox>
          <MovieBoxContinaer>
            <MovieDescBox>
              <TitleArea
                title={movieMetaData.title}
                year={movieMetaData.year}
                genres={movieMetaData.genres}
                runtime={movieMetaData.runtime}
              />
              <NumericCnt rating={movieMetaData.rating} />
              <ProdCrew summary={movieMetaData.summary} />
            </MovieDescBox>
            <RecommMovieCnt>
              <RecommMovieHeader>추천 영화</RecommMovieHeader>
              <RecommPosterBox>
                {/* 추천 영화 목록 + 클릭시 해당 페이지로 이동 */}
                <RecommendMovies recommList={genreSearchResult.current} />
              </RecommPosterBox>
            </RecommMovieCnt>
          </MovieBoxContinaer>
        </>
      )}
    </DetailsCnt>
  );
}

const DetailsCnt = styled.article`
  width: 100vw;
  height: max-content;
  min-height: 100vh;
  color: #ffffff;
  background-color: ${palette.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MoviePosterBox = styled.section`
  width: 100%;
  text-align: right;
  padding-right: 2rem;
`;
const MoviePoster = styled.img`
  width: 30vw;
  min-width: 250px;
`;
const MovieDescBox = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const RecommMovieCnt = styled(MovieDescBox)`
  margin-top: 2rem;
`;
const RecommMovieHeader = styled.h2`
  font-size: 2rem;
`;
const RecommPosterBox = styled(MovieDescBox)`
  margin-top: 1rem;
  flex-direction: row;
  & img {
    margin-right: 1rem;
  }
`;
const MovieBoxContinaer = styled(MovieDescBox)``;
