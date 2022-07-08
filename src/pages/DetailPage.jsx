import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';

import TitleArea from 'components/detailPage/TitleArea';
import NumericCnt from 'components/detailPage/NumericCnt';
import ProdCrew from 'components/detailPage/ProdCrew';
import { useParams } from 'react-router-dom';
import useDetailModel from 'models/useDetailModel';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

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
