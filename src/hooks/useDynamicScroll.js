import { useState, useEffect } from 'react';

function useDynamicScroll(movieList, listRef, containerRef) {
  // minimumLength: 현재 화면 크기에 최소한으로 필요한 아이템 개수
  const [minimumLength, setMinimumLength] = useState();

  // minimumLength를 설정하는 useEffect
  useEffect(() => {
    // 리스트 아이템이 있을 때
    if (listRef.current) {
      // maxColumn: 화면에 세로 방향으로 최대한 표시 가능한 아이템 개수
      const maxColumn = Math.ceil(
        window.innerHeight / listRef.current.clientHeight,
      );
      // maxRow: 화면에 가로 방향으로 최대한 표시 가능한 아이템 개수(ul 너비 기준)
      const maxRow = Math.floor(
        containerRef.current.clientWidth / listRef.current.clientWidth,
      );
      // minimumNeededLength: 세로 개수 * 가로 개수
      const minimumNeededLength = maxColumn * maxRow;
      // 현재 불러와진 아이템 개수(= movieList.length)가 최소로 필요한 개수(minimumNeededLength)보다 적을 경우 minimumLength를 업데이트
      if (movieList.length < minimumNeededLength) {
        setMinimumLength(minimumNeededLength);
      }
    }
  }, [listRef.current]);

  return { minimumLength };
}

export default useDynamicScroll;
