import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function RecommendMovies({ recommList }) {
  const navigate = useNavigate();
  return recommList?.map(
    ({ id, title, medium_cover_image: posterImg }, index) => {
      return (
        <RecommMoviePoster
          src={posterImg}
          alt={`recommend movie: ${title}`}
          key={`${title}_${index}`}
          onClick={() => {
            navigate(`/detail/${id}`);
          }}
        />
      );
    },
  );
}

const RecommMoviePoster = styled.img`
  width: 100%;
  min-width: 0;
  height: auto;
  cursor: pointer;
`;
