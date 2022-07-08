import React, { useState } from 'react';
import { useRef, useEffect } from 'react';

const useIntersectObserver = (props) => {
  const observeTargetRef = useRef();
  const [isTargetVisible, setTargetVisible] = useState(false);

  useEffect(() => {
    const onTargetVisible = ([entry]) => {
      setTargetVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(onTargetVisible, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    observeTargetRef.current && observer.observe(observeTargetRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return { isTargetVisible, observeTargetRef };
};

export default useIntersectObserver;
