import React from 'react';
import styled from 'styled-components';

export default function MovieCard() {
  return (
    <CardLayout>
      <article>
        <button type="button">버튼</button>
        <img src="" alt="" />
        <strong>83</strong>
        <h1>Top Gun: Maverick(2022)</h1>
      </article>
    </CardLayout>
  );
}

const CardLayout = styled.div`
  width: 150px;
  height: 340px;

  & img {
    width: 100%;
    height: 225px;
  }
`;
