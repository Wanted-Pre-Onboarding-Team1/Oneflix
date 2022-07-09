import React, { useEffect, useState, useRef } from 'react';
import useInput from 'hooks/common/useInput';
import { SearchIcon } from 'assets/imgs';
import media from 'lib/styles/media';
import { palette } from 'lib/styles/palette';
import useMovieModel from 'models/useMovieModel';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useToggle from 'hooks/common/useToggle';
import useOutSideClick from 'hooks/common/useOutsideClick';
import RecommendBox from './RecommendBox';

function SearchInput() {
  const [keyword, onChangeValue, onClickChange] = useInput('');
  const [isActive, onToggleIsActive] = useToggle();
  const { targetEl } = useOutSideClick(isActive, onToggleIsActive);

  const navigate = useNavigate();
  const searchInput = useRef();

  const { movies } = useMovieModel(' ', 1);
  const searchData = movies?.map((movie) => movie.title);
  const [recommendKeyword, setRecommendKeyword] = useState(movies);
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
    <div ref={targetEl}>
      <SearchForm
        onSubmit={() => navigate(`/search/${keyword}`)}
        ref={searchInput}
      >
        {isActive && (
          <RecommendBox
            recommendKeyword={recommendKeyword}
            onChangeValue={onClickChange}
            inputRef={searchInput.current}
          />
        )}
        <Icon src={SearchIcon} alt="검색 돋보기" />
        <InputStyled
          type="text"
          placeholder="영화를 제목으로 검색해보세요"
          value={keyword}
          onChange={onChangeValue}
          onFocus={onToggleIsActive}
        />
        <SearchBtn type="submit">검색</SearchBtn>
        <SelectTag name="fruits" className="select">
          <option value="title">제목</option>
          <option value="year">개봉년도</option>
        </SelectTag>
      </SearchForm>
    </div>
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
const SelectTag = styled.select`
  width: 90px;
  padding: 14px 4px;
  font-size: 16px;
  font-weight: 600;
  background-color: #bb65ff;
  border-radius: 6px;
  line-height: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* select {
  box-sizing: border-box;
  width: 100px;
  padding: 4px;
  font-size: 14px;
  border-radius: 6px; */
`;
