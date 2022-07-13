import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import RecommendBox from 'components/searchPage/RecommendBox';
import useInput from 'hooks/common/useInput';
import useLikeModel from 'models/useLikeModel';
import { SearchIcon } from 'assets/imgs';
import media from 'lib/styles/media';
import { palette } from 'lib/styles/palette';

function LikeSearchInput() {
  // 검색어 전달을 위한 useParams
  const params = useParams();
  // useLikeModel에 검색어를 전달해 검색어를 포함하는 목록 수령
  const { movies } = useLikeModel(params.title);
  const searchData = movies?.data.map((movie) => movie.title);
  const [keyword, onChangeValue, onClickChange] = useInput('');
  const [recommendKeyword, setRecommendKeyword] = useState(movies);
  const navigate = useNavigate();
  const searchInput = useRef();

  /*
    submit 개선
      - 기존: submit시 실제 페이지 이동 발생? -> 뒤로 가기 2번을 눌러야 /like로 되돌아옴
      - 개선: event.preventDefault + React.useCallback 사용으로 라우팅만 발생
        => 뒤로 가기 1번만 눌러도 /like로 되돌아옴
  */
  const handleSubmit = useCallback(
    (event) => navigateToSearchResult(event),
    [keyword],
  );
  // 라우팅 직접 담당
  function navigateToSearchResult(event) {
    event.preventDefault();
    navigate(`/like/${keyword}`);
  }

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
    <SearchForm onSubmit={handleSubmit} ref={searchInput}>
      {keyword && (
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
      />
      <SearchButton type="button">검색</SearchButton>
    </SearchForm>
  );
}

export default LikeSearchInput;

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
const SearchButton = styled.button`
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
