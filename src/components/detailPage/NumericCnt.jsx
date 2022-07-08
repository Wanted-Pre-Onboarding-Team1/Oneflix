import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { palette } from 'lib/styles/palette';

export default function NumericCnt({ userRating }) {
  return (
    <NumericInfoCnt>
      <Rating>
        평점
        <strong>4.5</strong>
      </Rating>
      <LikeBtn type="button">
        즐겨찾기 <AiFillStar className="like" />
      </LikeBtn>
    </NumericInfoCnt>
  );
}

const { highlightColor } = palette;

const NumericInfoCnt = styled.section`
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
    color: ${highlightColor};
    vertical-align: middle;
  }
`;
