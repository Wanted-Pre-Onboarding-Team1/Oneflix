import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';

export default function NumericCnt({ rating }) {
  return (
    <Section>
      <Rating>
        평점
        <strong>{rating}</strong>
      </Rating>
      <LikeBtn type="button">
        즐겨찾기 <AiFillStar className="like" />
      </LikeBtn>
    </Section>
  );
}

const Section = styled.section`
  font-size: 1.4rem;
  margin-top: 1rem;
  display: flex;
`;

const Rating = styled.p`
  border: 0.15rem solid ${palette.highlightColor};
  border-radius: 8px;

  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 0.8rem;

  strong {
    font-weight: bold;
    color: ${palette.highlightColor};
    margin-left: 5px;
  }
`;

const LikeBtn = styled.button`
  color: #ffffff;
  border: 0.15rem solid ${palette.highlightColor};
  border-radius: 8px;

  padding: 10px;
  margin-left: 0.8rem;

  .like {
    width: 2rem;
    height: 2rem;
    color: ${palette.highlightColor};
    vertical-align: middle;
  }
`;
