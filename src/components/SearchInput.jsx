import { SearchIcon } from 'assets/imgs';
import useInput from 'hooks/common/useInput';
import { palette } from 'lib/styles/palette';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecommendBox from './RecommendBox';

const searchData = ['영화 추천', '액션영화', '송강호 주연', '오늘의 영화'];
function SearchInput() {
  const [keyword, onChangeValue] = useInput('');
  const [recommendKeyword, setRecommendKeyword] = useState(searchData);

  useEffect(() => {
    if (keyword) {
      const onChangeKeyword = () => {
        const choosenTextList = searchData.filter((textItem) =>
          textItem.includes(keyword),
        );
        setRecommendKeyword(choosenTextList);
      };
      onChangeKeyword();
    }
  }, [keyword]);

  return (
    <>
      <SearchInputBox>
        <Icon src={SearchIcon} alt="검색 돋보기" />
        <InputStyled
          type="text"
          placeholder="영화를 제목으로 검색해보세요"
          value={keyword}
          onChange={onChangeValue}
        />

        <SearchBtn type="button">검색</SearchBtn>
      </SearchInputBox>
      {keyword && <RecommendBox recommendKeyword={recommendKeyword} />}
    </>
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
