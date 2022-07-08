import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';

import TitleArea from 'components/detailPage/TitleArea';
import NumericCnt from 'components/detailPage/NumericCnt';
import ProdCrew from 'components/detailPage/ProdCrew';

export default function DetailPage() {
  return (
    <Article>
      <SectionImg>
        <DummyImg src="/assets/img/movieposter.jpeg" alt="moviemposter" />
      </SectionImg>
      <SectionTxt>
        <TitleArea title="title" pubDate="pubDate" subtitle="subtitle" />
        <NumericCnt userRating="userRating" />
        <ProdCrew director="director" actor="actor" />
      </SectionTxt>
    </Article>
  );
}

const Article = styled.article`
  width: 100vw;
  height: 100vh;
  color: #ffffff;
  background-color: ${palette.backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;
`;
const SectionImg = styled.section`
  width: 100%;
  text-align: right;
  padding-right: 2rem;
`;
const SectionTxt = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DummyImg = styled.img`
  width: 30vw;
  min-width: 250px;
`;
