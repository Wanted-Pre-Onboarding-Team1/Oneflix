import { HttpRequest } from 'lib/api/httpRequest';
import { useEffect, useState } from 'react';

const useDetailModel = (valueToSearch, keyToFind = 'id') => {
  const [movies, setMovies] = useState(null);
  const request = new HttpRequest();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await request.get(
          `/movies?${keyToFind}=${valueToSearch}`,
        );
        setMovies(response);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error);
      }
    };
    getMovies();
    // 클릭시 이동 기능을 구현하기 위해 변화 감지 목적으로 dependency array 업데이트
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueToSearch]);

  return { movies };
};

export default useDetailModel;
