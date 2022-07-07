import React from 'react';
import styled from 'styled-components';

import TitleArea from 'components/detailPage/TitleArea';
import NumericCnt from 'components/detailPage/NumericCnt';
import ProdCrew from 'components/detailPage/ProdCrew';

export default function DetailPage() {
  return (
    <DevArticle>
      <DevSection>
        <DummyImg />
      </DevSection>
      <DevSection>
        <TitleArea title="title" pubDate="pubDate" subtitle="subtitle" />
        <NumericCnt userRating="userRating" />
        <ProdCrew director="director" actor="actor" />
      </DevSection>
    </DevArticle>
  );
}

const DevArticle = styled.article`
  display: flex;
  * {
    /* border: 1px solid black; */
  }
`;
const DevSection = styled.section`
  width: 100%;
`;
const DummyImg = styled.div`
  width: 300px;
  height: 444px;
  background: grey;
`;
