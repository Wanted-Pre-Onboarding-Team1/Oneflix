import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from 'assets/imgs';
import media from 'lib/styles/media';
import { palette } from 'lib/styles/palette';

function RecommendBox({ recommendKeyword, onChangeValue, inputRef }) {
  const { clientHeight, clientTop } = inputRef;
  const inputRefStyleInfo = window.getComputedStyle(inputRef);
  const { marginTop } = inputRefStyleInfo;
  const inputRefTopMargin = parseInt(marginTop, 10);

  return (
    <DropBox top={clientTop + clientHeight + inputRefTopMargin}>
      <Recommend> 검색어</Recommend>
      {recommendKeyword?.map((item, index) => (
        <DropEle
          key={item + index}
          value={item}
          onClick={() => onChangeValue(item)}
        >
          <Icon src={SearchIcon} alt="검색 돋보기" />
          {item}
        </DropEle>
      ))}
    </DropBox>
  );
}

export default RecommendBox;

const { backgroundColorLight, fontColor, backgroundColorLighter, mainColor } =
  palette;

const DropBox = styled.ul`
  position: absolute;
  width: 75%;
  top: ${({ top }) => top}px;
  background-color: ${backgroundColorLight};
  color: ${fontColor};
  padding: 10px;
  border-radius: 10px;
  max-width: 1060px;
  z-index: 10;
`;
const DropEle = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 4px;
  cursor: pointer;
  border-radius: 4px;
  :hover {
    background-color: ${backgroundColorLighter};
  }
`;
const Recommend = styled.p`
  font-size: 12px;
  margin-bottom: 4px;
  color: ${mainColor};
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
