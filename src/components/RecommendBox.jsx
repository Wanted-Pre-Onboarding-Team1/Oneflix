import { SearchIcon } from 'assets/imgs';
import media from 'lib/styles/media';
import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function RecommendBox({ recommendKeyword, inputRef }) {
  const { clientHeight, clientTop } = inputRef;
  const inputRefStyleInfo = window.getComputedStyle(inputRef);
  const { marginTop } = inputRefStyleInfo;
  const inputRefTopMargin = parseInt(marginTop, 10);

  return (
    <DropBox top={clientTop + clientHeight + inputRefTopMargin}>
      <Recommend>추천 검색어</Recommend>
      {recommendKeyword.map((item, index) => (
        <DropEle key={item + index}>
          <Icon src={SearchIcon} alt="검색 돋보기" />
          {item}
        </DropEle>
      ))}
    </DropBox>
  );
}

export default RecommendBox;

const DropBox = styled.ul`
  width: 100%;
  position: absolute;
  top: 45px;
  top: ${({ top }) => top}px;
  background-color: ${palette.backgroundLightColor};
  color: ${palette.fontColor};
  padding: 10px;
  border-radius: 10px;
  max-width: 1060px;
`;
const DropEle = styled.li`
  display: flex;
  align-items: center;
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
const Icon = styled.img`
  width: 21px;
  height: 21px;
  margin-right: 8px;
  ${media.small} {
    width: 16px;
    height: 16px;
  }
`;
