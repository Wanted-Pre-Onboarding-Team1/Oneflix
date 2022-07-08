import React from 'react';
import styled from 'styled-components';
import TitleArea from 'components/detailPage/TitleArea';
import NumericCnt from 'components/detailPage/NumericCnt';
import ProdCrew from 'components/detailPage/ProdCrew';
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
import useDetailModel from 'models/useDetailModel';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
=======
import { palette } from 'lib/styles/palette';
>>>>>>> 00d16d8ee65209566036a3b70ca7aed4fd851645

export default function DetailPage() {
  const [moviMetaData, setmoviMetaData] = useState(null);

  const paramId = useParams().id.slice(1);
  const movies = useDetailModel(paramId);

  useEffect(() => {
    if (movies.movies) {
      const movie = movies.movies?.data[0];
      setmoviMetaData(movie);
    }
  }, [movies, moviMetaData]);

  return (
<<<<<<< HEAD
    <Article>
      {moviMetaData && (
        <>
          <SectionImg>
            <DummyImg src={moviMetaData.medium_cover_image} />
          </SectionImg>
          <SectionTxt>
            <TitleArea
              title={moviMetaData.title}
              year={moviMetaData.year}
              genres={moviMetaData.genres}
              runtime={moviMetaData.runtime}
            />
            <NumericCnt rating={moviMetaData.rating} />
            <ProdCrew summary={moviMetaData.summary} />
          </SectionTxt>
        </>
      )}
    </Article>
=======
    <DetailsCnt>
      <MoviePosterBox>
        <MoviePoster src="/assets/img/movieposter.jpeg" alt="moviemposter" />
      </MoviePosterBox>
      <MovieDescBox>
        <TitleArea title="title" pubDate="pubDate" subtitle="subtitle" />
        <NumericCnt userRating="userRating" />
        <ProdCrew director="director" actor="actor" />
      </MovieDescBox>
    </DetailsCnt>
>>>>>>> 00d16d8ee65209566036a3b70ca7aed4fd851645
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
