import { YEAR_ITEMS, SELECT_ITEM } from 'constants';
import useRecommendModel from 'models/useRecommendModel';
import { useEffect, useState } from 'react';
import useInput from './common/useInput';

const useRecommendForm = () => {
  const [keyword, onChangeValue, onClickChange] = useInput('');
  const [select, onChangeSelect] = useInput(SELECT_ITEM[0]);
  const { searchTitleData } = useRecommendModel();
  const [recommendKeyword, setRecommendKeyword] = useState(searchTitleData);
  useEffect(() => {
    if (keyword && select === '제목') {
      const onChangeRecommend = () => {
        const choosenTextList = searchTitleData.filter((textItem) =>
          textItem.includes(keyword),
        );
        setRecommendKeyword(choosenTextList);
      };
      onChangeRecommend();
    }
    if (keyword && select === '개봉년도') {
      const onChangeRecommend = () => {
        const choosenTextList = YEAR_ITEMS.filter((textItem) =>
          textItem.includes(keyword),
        );
        setRecommendKeyword(choosenTextList);
      };
      onChangeRecommend();
    }
  }, [keyword]);

  return {
    keyword,
    onChangeValue,
    onClickChange,
    select,
    onChangeSelect,
    recommendKeyword,
  };
};

export default useRecommendForm;
