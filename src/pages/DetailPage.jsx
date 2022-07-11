import React from 'react';
import styled from 'styled-components';
import TitleArea from 'components/detailPage/TitleArea';
import NumericCnt from 'components/detailPage/NumericCnt';
import ProdCrew from 'components/detailPage/ProdCrew';
import { useParams } from 'react-router-dom';
import useDetailModel from 'models/useDetailModel';
import { useEffect } from 'react';
import { useState } from 'react';

export default function DetailPage() {
  const [movieMetaData, setmovieMetaData] = useState(null);

  const paramId = useParams().id.slice(1);
  const movies = useDetailModel(paramId);

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
        </>
      )}
    </DetailsCnt>
  );
}

const DetailsCnt = styled.article`
  width: 100vw;
  height: 100vh;
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
const MovieDescBox = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MoviePoster = styled.img`
  width: 30vw;
  min-width: 250px;
`;
