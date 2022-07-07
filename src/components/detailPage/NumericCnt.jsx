import React from 'react';
import { FiStar } from 'react-icons/fi';

export default function NumericCnt({ userRating }) {
  return (
    <section>
      <p>평점 {userRating}</p>
      <button type="button">
        즐겨찾기 <FiStar />
      </button>
    </section>
  );
}
