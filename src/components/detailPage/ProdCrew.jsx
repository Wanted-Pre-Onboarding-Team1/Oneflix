import React from 'react';
import styled from 'styled-components';

export default function ProdCrew({ summary }) {
  const sliceSummary = (text) => {
    if (text.length > 500) return `${text.substring(0, 501)}...`;
    return text;
  };

  return (
    <section>
      <MovieSummary>
        {summary.length > 500 ? `${summary.substring(0, 501)}...` : summary}
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
