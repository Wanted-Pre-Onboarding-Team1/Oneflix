import { YEAR_ITEMS, SELECT_ITEM } from 'constants';
import useRecommendModel from 'models/useRecommendModel';
import { useEffect, useState } from 'react';
import useApplyDebounce from './common/useDebounce';
import useInput from './common/useInput';

const useRecommendForm = () => {
  const [keyword, onChangeKeyword, onClickChange] = useInput('');
  const [select, onChangeSelect] = useInput(SELECT_ITEM[0]);
  const debounceKeyword = useApplyDebounce(keyword, 100);
  const { searchTitleData } = useRecommendModel(debounceKeyword);
  const [recommendKeyword, setRecommendKeyword] = useState(searchTitleData);
  const onChangeRecommend = (array) => {
    const choosenTextList = array.filter((textItem) =>
      textItem.includes(keyword),
    );
    setRecommendKeyword(choosenTextList);
  };

  useEffect(() => {
    if (keyword) {
      switch (select) {
        case '제목':
          setRecommendKeyword(searchTitleData);
          break;
        case '개봉년도':
          onChangeRecommend(YEAR_ITEMS);
          break;
        default:
          break;
      }
    }
  }, [debounceKeyword, select]);

  return {
    keyword,
    onChangeKeyword,
    onClickChange,
    select,
    onChangeSelect,
    recommendKeyword,
  };
};

export default useRecommendForm;
