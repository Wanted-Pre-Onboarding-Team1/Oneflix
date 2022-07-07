import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function RecommendBox({ recommendKeyword }) {
  return (
    <DropBox>
      <Recommend>추천 검색어</Recommend>
      {recommendKeyword.map((item, index) => (
        <DropEle key={item + index}>{item}</DropEle>
      ))}
    </DropBox>
  );
}

export default RecommendBox;

const DropBox = styled.div`
  width: 100%;
  background-color: ${palette.backgroundLightColor};
  color: ${palette.fontColor};
  padding: 10px;
`;
const DropEle = styled.div`
  padding: 8px 4px;
  cursor: pointer;
  border-radius: 4px;
  :hover {
    background-color: ${palette.backgroundLighterColor};
  }
`;
const Recommend = styled.p`
  font-size: 12px;
  margin-bottom: 4px;
  color: ${palette.mainColor};
`;
