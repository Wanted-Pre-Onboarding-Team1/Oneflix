import { useState, useRef, useEffect } from 'react';
// 무한스크롤 페이지별로 불러오는 로직
const defaultOption = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};

const useIntersectObserver = (options = defaultOption) => {
  const observeTargetRef = useRef();
  const [isTargetVisible, setTargetVisible] = useState(false);

  useEffect(() => {
    const onTargetVisible = ([entry]) => {
      setTargetVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(onTargetVisible, options);

    observeTargetRef.current && observer.observe(observeTargetRef.current);
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { isTargetVisible, observeTargetRef };
};

export default useIntersectObserver;
