import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { HttpRequest } from 'lib/api/httpRequest';
import { palette } from 'lib/styles/palette';

export default function NumericContent({ id, rating, like }) {
  const [isLikeClicked, setLikeClicked] = useState(like);
  const likeIconColor = isLikeClicked ? highlightColor : fontColor;
  const request = new HttpRequest();
  const previousLikeState = useRef(like);

  useEffect(() => {
    if (previousLikeState.current !== like) {
      setLikeClicked(!isLikeClicked);
      previousLikeState.current = like;
    }
  }, [like]);

  const handleClick = useCallback(() => markAsLike(), [isLikeClicked]);

  function markAsLike() {
    request.patch(`/movies/${id}`, { like: !isLikeClicked });
    setLikeClicked(!isLikeClicked);
  }

  return (
    <NumericInfoContent>
      <Rating>
        평점
        <strong>{rating}</strong>
      </Rating>
      <LikeBtn type="button" onClick={handleClick}>
        즐겨찾기 <AiFillStar className="like" color={likeIconColor} />
      </LikeBtn>
    </NumericInfoContent>
  );
}

const { highlightColor, fontColor } = palette;

const NumericInfoContent = styled.section`
  font-size: 1.4rem;
  margin-top: 1rem;
  display: flex;
`;
const Rating = styled.p`
  border: 0.15rem solid ${highlightColor};
  border-radius: 8px;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 0.8rem;
  strong {
    font-weight: bold;
    color: ${highlightColor};
    margin-left: 5px;
  }
`;
const LikeBtn = styled.button`
  color: #ffffff;
  border: 0.15rem solid ${highlightColor};
  border-radius: 8px;
  padding: 10px;
  margin-left: 0.8rem;
  .like {
    width: 2rem;
    height: 2rem;
    color: ${({ color }) => color};
    vertical-align: middle;
  }
`;
