import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useDetailModel from 'models/useDetailModel';

export default function RecommendMovies({ currentMovie }) {
  const [isStillPrevMovie, updatePreviousMovie] = useState(false);
  const [isRerenderNeeded, setRerenderNeeded] = useState(false);
  const genreSearchResult = useRef();
  const previousMovie = useRef(currentMovie.id);
  const navigate = useNavigate();
  const requestedGenres = useDetailModel(currentMovie.genres[0], 'genres');

  useEffect(() => {
    if (previousMovie.current !== currentMovie.id) {
      previousMovie.current = currentMovie.id;
      updatePreviousMovie(!isStillPrevMovie);
    }
  }, [previousMovie.current, currentMovie.id]);

  useEffect(() => {
    if (requestedGenres.movies) {
      const { data } = requestedGenres.movies;
      const isRGIncludesCurrentMovie = data.find(
        (movieData) => movieData.id === currentMovie.id,
      );
      let recommendsList = null;
      if (isRGIncludesCurrentMovie) {
        recommendsList = data
          .filter((movieData) => movieData.id !== currentMovie.id)
          .slice(0, 4);
      } else {
        recommendsList = data.slice(0, 4);
      }
      genreSearchResult.current = recommendsList;
      setRerenderNeeded(true);
    }
    return () => {
      genreSearchResult.current = undefined;
      setRerenderNeeded(false);
    };
  }, [requestedGenres, currentMovie.id]);

  return genreSearchResult.current?.map(
    ({ id, title, medium_cover_image: posterImg }, index) => {
      return (
        // <StylePosterWrap>
        <RecommMoviePoster
          src={posterImg}
          alt={`recommend movie: ${title}`}
          key={`${title}_${index}`}
          onClick={() => {
            navigate(`/detail/${id}`);
          }}
          onLoad={() => updatePreviousMovie(!isStillPrevMovie)}
        />
      );
    },
  );
}

const RecommMoviePoster = styled.img`
  width: 25%;
  min-width: 0;
  height: auto;
  cursor: pointer;
`;
