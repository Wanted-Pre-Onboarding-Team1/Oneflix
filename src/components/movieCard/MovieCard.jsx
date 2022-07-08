import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';

export default function MovieCard({ title, year, rating, image }) {
  return (
    <CardLayout>
      <button type="button">버튼</button>
      <img src={image} alt={`${title} 포스터`} />
      <section>
        <strong>
          <span style={{ color: `${palette.hilightColor}` }}>{rating}</span>
          <span>/10</span>
        </strong>
        <h1> {`${title}(${year})`} </h1>
      </section>
    </CardLayout>
  );
}

const CardLayout = styled.article`
  width: 180px;
  height: 360px;
  margin-bottom: 16px;
  border-radius: 0 0 4px 4px;
  font-weight: 400;
  background: ${palette.tabColorSide};
  color: ${palette.textColorSide};

  & img {
    width: 100%;
    height: 225px;
  }

  & section {
    padding: 12px;
  }

  & h1 {
    font-size: 1.1rem;
  }

  & strong {
    display: block;
    text-align: right;
    margin-bottom: 8px;
  }

  & button {
    position: absolute;
  }
`;
