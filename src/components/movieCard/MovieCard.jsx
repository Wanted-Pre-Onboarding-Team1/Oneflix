import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HttpRequest } from 'lib/api/httpRequest';
import { AiFillStar } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { palette } from 'lib/styles/palette';

export default function MovieCard({
  id,
  title,
  year,
  rating,
  image,
  like,
  onRemoveLikeMovie,
}) {
  const [isLikeClicked, setLikeClicked] = useState(like);
  const likeIconColor = isLikeClicked ? highlightColor : fontColor;
  const request = new HttpRequest();

  function markAsLike(event) {
    event.preventDefault();
    setLikeClicked(!isLikeClicked);
    request.patch(`/movies/${id}`, { like: !isLikeClicked });
    like &&
      onRemoveLikeMovie((previousLikeList) =>
        previousLikeList.filter((movie) => movie.id !== id),
      );
  }

  return (
    <CardLayout>
      <NavLink to={`/detail/${id}`}>
        <button type="button" onClick={markAsLike}>
          <LikeIcon color={likeIconColor} />
        </button>
        <CardPoster src={image} alt={`${title} 포스터`} />
        <CardMovieInfo>
          <strong>
            <span style={{ color: `${highlightColor}` }}>{rating}</span>
            <span> / 10</span>
          </strong>
          <CardMovieHeading>
            {' '}
            {`${
              title.length < 25 ? title : `${title.substring(0, 20)}...`
            }(${year})`}{' '}
          </CardMovieHeading>
        </CardMovieInfo>
      </NavLink>
    </CardLayout>
  );
}

const { fontColor, highlightColor, sideTabColor, sideTextColor } = palette;

const CardLayout = styled.article`
  width: 180px;
  height: 360px;
  margin-bottom: 16px;
  border-radius: 0 0 4px 4px;
  font-weight: 400;
  background: ${sideTabColor};
  color: ${sideTextColor};
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  & strong {
    display: block;
    text-align: right;
    margin-bottom: 8px;
  }
  & button {
    position: absolute;
    z-index: 0;
  }
`;
const CardPoster = styled.img`
  width: 100%;
  height: 225px;
`;
const LikeIcon = styled(AiFillStar)`
  width: 30px;
  height: 30px;
  fill: ${({ iconColor }) => iconColor};
`;
const CardMovieInfo = styled.section`
  padding: 12px;
`;
const CardMovieHeading = styled.h1`
  font-size: 1.1rem;
  line-height: 1.3rem;
`;
