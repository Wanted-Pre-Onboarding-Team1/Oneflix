import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TitleArea from 'components/detailPage/TitleArea';
import NumericCnt from 'components/detailPage/NumericCnt';
import ProdCrew from 'components/detailPage/ProdCrew';
import RecommendMovies from 'components/detailPage/RecommendMovies';
import useDetailModel from 'models/useDetailModel';
import { palette } from 'lib/styles/palette';

export default function ModalMovieDetail() {
  const [movieMetaData, setmovieMetaData] = useState(null);

  const paramId = useParams().id.slice();
  const movies = useDetailModel(paramId);

  useEffect(() => {
    if (movies.movies) {
      const movie = movies.movies?.data[0];
      setmovieMetaData(movie);
    }
  }, [movies]);

  return (
    <ModalBackground>
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
                  <RecommendMovies currentMovie={movieMetaData} />
                </RecommPosterBox>
              </RecommMovieCnt>
            </MovieBoxContinaer>
          </>
        )}
      </DetailsCnt>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  background-color: rgba(91, 112, 131, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsCnt = styled.article`
  /* width: 100%; */
  /* height: 1000px; */
  /* min-height: 100vh; */
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
