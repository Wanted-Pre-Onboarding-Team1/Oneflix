import { useCallback, useEffect, useRef } from 'react';

export default function useOutSideClick(isOpen, onClose) {
  const targetEl = useRef(null);

  const onClickOutSide = useCallback(
    (e) => {
      const { target } = e;
      if (target) {
        if (isOpen && !targetEl.current?.contains(target)) {
          onClose();
        }
      }
    },
    [isOpen, onClose],
  );

  useEffect(() => {
    window.addEventListener('click', onClickOutSide);
    return () => {
      window.removeEventListener('click', onClickOutSide);
    };
  }, [onClickOutSide]);

  return {
    targetEl,
  };
}
