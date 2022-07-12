import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TitleArea from 'components/detailPage/TitleArea';
import NumericCnt from 'components/detailPage/NumericCnt';
import ProdCrew from 'components/detailPage/ProdCrew';
import RecommendMovies from 'components/detailPage/RecommendMovies';
import useDetailModel from 'models/useDetailModel';
import { palette } from 'lib/styles/palette';
import { FiXCircle as CloseIcon } from 'react-icons/fi';

export default function ModalMovieDetail() {
  const [movieMetaData, setmovieMetaData] = useState(null);
  const navigate = useNavigate();

  const paramId = useParams().id.slice();
  const movies = useDetailModel(paramId);

  useEffect(() => {
    if (movies.movies) {
      const movie = movies.movies?.data[0];
      setmovieMetaData(movie);
    }
  }, [movies]);

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <ModalBackground>
      <DetailsCnt>
        <CloseButton type="button" onClick={closeModal}>
          <CloseIcon className="closeIcon" />
        </CloseButton>
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
                <RecommMovieHeader>이 영화와 비슷한 영화</RecommMovieHeader>
                <RecommPosterBox>
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
  position: fixed;
  top: 0;
  background-color: rgba(25, 25, 25, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  .closeIcon {
    width: 40px;
    height: 40px;
  }
  color: ${palette.fontColor};
  position: absolute;
  right: -50px;
  top: 0;
`;

const DetailsCnt = styled.article`
  width: 85vw;
  min-height: 69vh;
  color: ${palette.fontColor};
  background-color: ${palette.backgroundColorLight};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding-right: 2.8rem;
  /* border: 1px solid white; */
  border-radius: 50px;
`;
const MoviePosterBox = styled.section`
  width: 100%;
  text-align: center;
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
