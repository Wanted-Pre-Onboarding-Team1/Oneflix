import { SORT_ITEMS } from 'constants';
import { palette } from 'lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function SortBox({ sortBy, onChangeSort }) {
  return (
    <SortBoxLayout>
      {SORT_ITEMS.map(({ text, value }) => (
        <SortButton
          key={value}
          name="sort"
          value={value}
          type="button"
          onClick={onChangeSort}
          className={sortBy === value ? 'active' : ''}
        >
          {text}
        </SortButton>
      ))}
    </SortBoxLayout>
  );
}

export default SortBox;

const SortBoxLayout = styled.div`
  margin-left: 30px;
  .active {
    color: ${palette.highlightColor};
  }
`;
const SortButton = styled.button`
  margin: 0 10px 10px 10px;
  color: ${palette.sideTextColor};
`;
