import React, { useRef } from 'react';
import { SearchIcon } from 'assets/imgs';
import media from 'lib/styles/media';
import { palette } from 'lib/styles/palette';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useToggle from 'hooks/common/useToggle';
import useOutSideClick from 'hooks/common/useOutsideClick';
import { SELECT_ITEM } from 'constants';
import useRecommendForm from 'hooks/useRecommendForm';
import RecommendBox from './RecommendBox';
import SelectBox from './SelectBox';

function SearchInput() {
  const {
    keyword,
    onChangeSelect,
    onChangeValue,
    onClickChange,
    recommendKeyword,
    select,
  } = useRecommendForm();
  const [isActive, onToggleIsActive] = useToggle();
  const { targetEl } = useOutSideClick(isActive, onToggleIsActive);
  const navigate = useNavigate();
  const searchInput = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    keyword && select === '제목'
      ? navigate(`/search?title=${keyword}&year=`)
      : navigate(`/search?title=&year=${keyword}`);
  };

  return (
    <SearchForm onSubmit={onSubmit} ref={searchInput}>
      <SelectBox
        selectData={SELECT_ITEM}
        value={select}
        onChangeValue={onChangeSelect}
      />
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
        placeholder={`영화를 ${select}으로 검색해보세요`}
        value={keyword}
        onChange={onChangeValue}
        onFocus={onToggleIsActive}
        ref={targetEl}
      />
      <SearchBtn type="button" onClick={onSubmit}>
        검색
      </SearchBtn>
    </SearchForm>
  );
}

export default SearchInput;

const { borderColor, fontColor } = palette;

const SearchForm = styled.form`
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
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
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
