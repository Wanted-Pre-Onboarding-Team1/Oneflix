import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TitleArea from 'components/detailPage/TitleArea';
import NumericCnt from 'components/detailPage/NumericCnt';
import ProdCrew from 'components/detailPage/ProdCrew';
import { useParams } from 'react-router-dom';
import useDetailModel from 'models/useDetailModel';
import { palette } from 'lib/styles/palette';

export default function DetailPage() {
  const [movieMetaData, setmovieMetaData] = useState(null);
  const [recommList, setRecommList] = useState([1, 2, 3, 4]); // 비슷한 장르 목록으로 대체

  const paramId = useParams().id.slice();
  const movies = useDetailModel(paramId);

  const recommendMovies = recommList.map((recommendTitle, index) => {
    return (
      <RecommMoviePoster
        src={movieMetaData.medium_cover_image}
        key={`${recommendTitle}_${index}`}
      />
    );
  });

  useEffect(() => {
    if (movies.movies) {
      const movie = movies.movies?.data[0];
      setmovieMetaData(movie);
    }
  }, [movies, movieMetaData]);

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
              <RecommPosterBox>{recommendMovies}</RecommPosterBox>
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
  * {
    /* border: 1px solid white; */
  }
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
const RecommMoviePoster = styled(MoviePoster)`
  width: 100%;
  min-width: 0;
  height: auto;
`;
const MovieBoxContinaer = styled(MovieDescBox)``;
