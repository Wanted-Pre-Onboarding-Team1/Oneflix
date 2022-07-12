import React from 'react';
import styled from 'styled-components';

export default function ProdCrew({ summary }) {
  return (
    <section>
      <MovieSummary>
        {summary && summary.length > 500 ? summary.substring(0, 501) : summary}
        {!summary && '등록된 줄거리가 없습니다.'}
      </MovieSummary>
    </section>
  );
}

const MovieSummary = styled.p`
  width: 30vw;
  overflow: visible;
  font-size: 1rem;
  line-height: 1.3rem;
  margin-top: 1rem;
`;
