import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { palette } from 'lib/styles/palette';

export default function MovieCard({ id, title, year, rating, image }) {
  return (
    <CardLayout>
      <NavLink to={`/detail/${id}`}>
        <button type="button">버튼</button>
        <img src={image} alt={`${title} 포스터`} />
        <section>
          <strong>
            <span style={{ color: `${palette.hilightColor}` }}>{rating}</span>
            <span>/10</span>
          </strong>
          <h1>
            {' '}
            {`${
              title.length < 25 ? title : `${title.substring(0, 20)}...`
            }(${year})`}{' '}
          </h1>
        </section>
      </NavLink>
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
    line-height: 1.3rem;
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
