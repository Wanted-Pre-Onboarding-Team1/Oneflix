import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TitleArea from 'components/detailPage/TitleArea';
import NumericContent from 'components/detailPage/NumericContent';
import Summary from 'components/detailPage/Summary';
import RecommendMovies from 'components/detailPage/RecommendMovies';
import useDetailModel from 'models/useDetailModel';
import { palette } from 'lib/styles/palette';
import { FiXCircle as CloseIcon } from 'react-icons/fi';
import { LAST_LOCATION_KEY } from 'constants';

export default function ModalMovieDetail() {
  const [movieMetaData, setmovieMetaData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const paramId = useParams().id.slice();
  const movies = useDetailModel(paramId);

  useEffect(() => {
    if (location.state?.background.location) {
      const { pathname, search } = location.state.background.location;
      sessionStorage.setItem(LAST_LOCATION_KEY, pathname + search);
    }
  }, []);

  useEffect(() => {
    if (movies.movies) {
      const movie = movies.movies?.data[0];
      setmovieMetaData(movie);
    }
  }, [movies]);

  const closeModal = () => {
    const lastLocation = sessionStorage.getItem(LAST_LOCATION_KEY);
    navigate(lastLocation, { replace: true });
  };

  return (
    <ModalBackground>
      <DetailsContainer>
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
                <NumericContent rating={movieMetaData.rating} />
                <Summary summary={movieMetaData.summary} />
              </MovieDescBox>
              <RecommedMovieContainer>
                <RecommMovieHeader>이 영화와 비슷한 영화</RecommMovieHeader>
                <RecommPosterBox>
                  <RecommendMovies currentMovie={movieMetaData} />
                </RecommPosterBox>
              </RecommedMovieContainer>
            </MovieBoxContinaer>
          </>
        )}
      </DetailsContainer>
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
  right: 10%;
  top: 17%;
`;

const DetailsContainer = styled.article`
  width: 85vw;
  height: 69vh;
  color: ${palette.fontColor};
  background-color: ${palette.backgroundColorLight};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2.8rem;
  border-radius: 5%;
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
const RecommedMovieContainer = styled(MovieDescBox)`
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
