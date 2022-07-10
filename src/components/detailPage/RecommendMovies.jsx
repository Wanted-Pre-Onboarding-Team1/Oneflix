import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useDetailModel from 'models/useDetailModel';

export default function RecommendMovies({ currentMovie }) {
  // 페이지 이동의 결과 데이터가 아직 갱신되지 않았을 경우 강제로 화면을 업데이트
  const [isStillPrevMovie, updatePrevMovie] = useState(false);
  // 장르 목록을 저장하기 위한 ref. state 사용시 무한 렌더링 발생
  const genreSearchResult = useRef();
  // 이전 영화 정보를 다음 페이지까지 저장
  const previousMovie = useRef(currentMovie.id);
  const navigate = useNavigate();
  // 동일 장르를 검색한 결과 데이터
  const requestedGenres = useDetailModel(currentMovie.genres[0], 'genres');

  // 페이지를 이동했으나 데이터가 갱신되지 않은 경우 강제로 갱신
  useEffect(() => {
    if (previousMovie.current !== currentMovie.id) {
      previousMovie.current = currentMovie.id;
      updatePrevMovie(!isStillPrevMovie);
    }
  }, [previousMovie.current, currentMovie.id]);

  // 추천 영화 목록 업데이트를 위한 useEffect
  useEffect(() => {
    // useDetailModel의 데이터가 들어오면
    if (requestedGenres.movies) {
      const { data } = requestedGenres.movies;
      // isRGIncludesCurrMovie: 추출한 데이터(= 추천 영화 목록)가 현재 영화를 포함하는지 검사
      const isRGIncludesCurrMovie = data.find(
        (movieData) => movieData.id === currentMovie.id,
      );
      // recommendsList: 추천 영화 목록 저장을 위한 변수
      let recommendsList = null;
      // 추천 영화 목록이 현재 영화를 포함할 경우, 해당 영화를 제외한 4개 영화를 선정
      if (isRGIncludesCurrMovie) {
        recommendsList = data
          .filter((movieData) => movieData.id !== currentMovie.id)
          .slice(0, 4);
        // 추천 영화 목록이 현재 영화를 포함하지 않으면 4개 영화 선정
      } else {
        recommendsList = data.slice(0, 4);
      }
      // 장르 목록을 저장함
      genreSearchResult.current = recommendsList;
    }
    return () => {
      genreSearchResult.current = undefined;
    };
  }, [requestedGenres, currentMovie.id]);

  return genreSearchResult.current?.map(
    ({ id, title, medium_cover_image: posterImg }, index) => {
      return (
        <RecommMoviePoster
          src={posterImg}
          alt={`recommend movie: ${title}`}
          key={`${title}_${index}`}
          onClick={() => {
            navigate(`/detail/${id}`);
          }}
          onLoad={() => updatePrevMovie(!isStillPrevMovie)}
        />
      );
    },
  );
}

const RecommMoviePoster = styled.img`
  width: 100%;
  min-width: 0;
  height: auto;
  cursor: pointer;
`;
