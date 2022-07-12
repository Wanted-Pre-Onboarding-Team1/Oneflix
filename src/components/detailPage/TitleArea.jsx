import React from 'react';
import styled from 'styled-components';

export default function TitleArea(props) {
  const { title, year, genres, runtime } = props;
  const runtimeHour = parseInt(runtime / 60, 10);
  const runtimeMinute = runtime % 60;

  return (
    <TitleInfoCnt>
      <Title>
        {title} ({year})
      </Title>
      <Genres>{genres.join(', ')}</Genres>
      <Runtime>
        {runtimeHour}h {runtimeMinute}m
      </Runtime>
    </TitleInfoCnt>
  );
}

const TitleInfoCnt = styled.section`
  font-size: 1.2rem;
`;
const Title = styled.h1`
  font-size: 2.6rem;
`;
const Genres = styled.p`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 1rem;
  ::after {
    content: '·';
    color: #ffffff;
    margin-left: 1rem;
  }
`;
const Runtime = styled.p`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 1rem;
`;
