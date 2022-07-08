import React from 'react';
import styled from 'styled-components';

export default function TitleArea(props) {
<<<<<<< HEAD
  const { title, year, genres, runtime } = props;
=======
  const { title, pubDate, subtitle } = props;

>>>>>>> 00d16d8ee65209566036a3b70ca7aed4fd851645
  return (
    <TitleInfoCnt>
      <Title>
        {title} ({year})
      </Title>
<<<<<<< HEAD
      <Genres>{genres}</Genres>
      <Runtime>{runtime}</Runtime>
    </Section>
=======
      <Genres>{subtitle}</Genres>
      <Runtime>2h 11m</Runtime>
    </TitleInfoCnt>
>>>>>>> 00d16d8ee65209566036a3b70ca7aed4fd851645
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
