import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import useInput from 'hooks/common/useInput';
import { SearchIcon } from 'assets/imgs';
import media from 'lib/styles/media';
import { palette } from 'lib/styles/palette';
import RecommendBox from './RecommendBox';

const searchData = ['영화 추천', '액션영화', '송강호 주연', '오늘의 영화'];
function SearchInput() {
  const [keyword, onChangeValue] = useInput('');
  const [recommendKeyword, setRecommendKeyword] = useState(searchData);

  const searchInput = useRef();

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
    <SearchForm ref={searchInput}>
      {keyword && (
        <RecommendBox
          recommendKeyword={recommendKeyword}
          inputRef={searchInput.current}
        />
      )}
      <Icon src={SearchIcon} alt="검색 돋보기" />
      <InputStyled
        type="text"
        placeholder="영화를 제목으로 검색해보세요"
        value={keyword}
        onChange={onChangeValue}
      />
      <SearchBtn type="button">검색</SearchBtn>
    </SearchForm>
  );
}

export default SearchInput;

const { borderColor, fontColor } = palette;

const SearchForm = styled.form`
  width: 100%;
  width: 75%;
  border: 1px solid ${borderColor};
  display: flex;
  align-items: center;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;
  height: 45px;
  max-width: 1060px;
  margin: 28px auto;
  ${media.small} {
    height: 30px;
  }
`;
const Icon = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 4px;
  ${media.small} {
    width: 16px;
    height: 16px;
  }
`;
const InputStyled = styled.input`
  width: 100%;
  padding: 4px 9px 4px 10px;
  background-color: rgba(0, 0, 0, 0.1);
  color: ${fontColor};
`;
const SearchBtn = styled.button`
  background-color: #bb65ff;
  border-radius: 6px;
  font-weight: 500;
  width: 91px;
  height: 45px;
  box-sizing: content-box;
  ${media.small} {
    width: 50px;
    height: 30px;
    font-size: 14px;
  }
`;
