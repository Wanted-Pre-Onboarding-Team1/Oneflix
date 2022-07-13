import { YEAR_ITEMS, SELECT_ITEM } from 'constants';
import useRecommendModel from 'models/useRecommendModel';
import { useEffect, useState } from 'react';
import useApplyDebounce from './common/useDebounce';
import useInput from './common/useInput';

const useRecommendForm = () => {
  const [keyword, onChangeKeyword, onClickChange] = useInput('');
  const [select, onChangeSelect] = useInput(SELECT_ITEM[0]);
  const DebounceKeyword = useApplyDebounce(keyword, 1000);
  const { searchTitleData } = useRecommendModel(DebounceKeyword);
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
          onChangeRecommend(searchTitleData);
          break;
        case '개봉년도':
          onChangeRecommend(YEAR_ITEMS);
          break;
        default:
          break;
      }
    }
  }, [keyword, select]);

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
