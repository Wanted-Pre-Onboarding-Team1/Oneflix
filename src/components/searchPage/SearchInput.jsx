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
import SelectBox from './SelectBox';

const selectData = ['제목', '개봉년도'];
const searchYearData = [
  '2022',
  '2021',
  '2020',
  '2019',
  '2018',
  '2017',
  '2016',
  '2015',
  '2014',
  '2013',
  '2012',
  '2011',
  '2010',
  '2009',
  '2008',
  '2007',
  '2006',
  '2005',
  '2004',
  '2003',
  '2002',
  '2001',
  '2000',
  '1999',
  '1998',
  '1997',
  '1996',
  '1995',
  '1994',
  '1993',
  '1992',
  '1991',
  '1990',
  '1989',
  '1988',
  '1987',
  '1986',
  '1985',
  '1984',
  '1983',
  '1982',
  '1981',
  '1980',
  '1970',
];
function SearchInput() {
  const [keyword, onChangeValue, onClickChange] = useInput('');
  const [select, onChangeSelect] = useInput(selectData[0]);
  const [isActive, onToggleIsActive] = useToggle();
  const { targetEl } = useOutSideClick(isActive, onToggleIsActive);
  const navigate = useNavigate();
  const searchInput = useRef();
  const { movies } = useMovieModel(' ', 1);
  const searchTitleData = movies?.map((movie) => movie.title);
  const [recommendKeyword, setRecommendKeyword] = useState(movies);
  useEffect(() => {
    if (keyword && select === '제목') {
      const onChangeRecommend = () => {
        const choosenTextList = searchTitleData.filter((textItem) =>
          textItem.includes(keyword),
        );
        setRecommendKeyword(choosenTextList);
      };
      onChangeRecommend();
    }
    if (keyword && select === '개봉년도') {
      const onChangeRecommend = () => {
        const choosenTextList = searchYearData.filter((textItem) =>
          textItem.includes(keyword),
        );
        setRecommendKeyword(choosenTextList);
      };
      onChangeRecommend();
    }
  }, [keyword]);
  const onSubmit = (e) => {
    e.preventDefault();
    keyword && select === '제목'
      ? navigate(`/search?title=${keyword}&year=`)
      : navigate(`/search?title=&year=${keyword}`);
  };

  return (
    <SearchForm onSubmit={onSubmit} ref={searchInput}>
      <SelectBox
        selectData={selectData}
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
        // eslint-disable-next-line react/jsx-curly-brace-presence
        placeholder={`영화를 제목으로 검색해보세요`}
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
