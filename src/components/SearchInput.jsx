import { SearchIcon } from 'assets/imgs';
import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function SearchInput() {
  return (
    <SearchInputBox>
      <Icon src={SearchIcon} alt="검색 돋보기" />
      <InputStyled type="text" placeholder="영화를 제목으로 검색해보세요" />
      <SearchBtn type="button">검색</SearchBtn>
    </SearchInputBox>
  );
}

export default SearchInput;

const SearchInputBox = styled.form`
  width: 100%;
  border: 1px solid ${palette.borderColor};
  display: flex;
  align-items: center;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;
  height: 45px;
`;

const Icon = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 4px;
`;

const InputStyled = styled.input`
  width: 100%;
  padding: 4px 9px 4px 10px;
  background-color: rgba(0, 0, 0, 0.1);
  color: ${palette.fontColor};
`;

const SearchBtn = styled.button`
  background-color: #bb65ff;
  border-radius: 6px;
  font-weight: 500;
  width: 91px;
  height: 45px;
  box-sizing: content-box;
`;
