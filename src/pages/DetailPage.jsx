import React from 'react';
import styled from 'styled-components';
import TitleArea from 'components/detailPage/TitleArea';
import NumericCnt from 'components/detailPage/NumericCnt';
import ProdCrew from 'components/detailPage/ProdCrew';
import { palette } from 'lib/styles/palette';

export default function DetailPage() {
  return (
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
