import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiFillCaretDown } from 'react-icons/ai';
import useToggle from 'hooks/common/useToggle';
import useOutSideClick from 'hooks/common/useOutsideClick';
import media from 'lib/styles/media';
import { palette } from 'lib/styles/palette';

function SelectBox({ selectData, value, onChangeValue }) {
  const [isSelect, onToggleSelect] = useToggle();
  const { targetEl } = useOutSideClick(isSelect, onToggleSelect);

  return (
    <SelectBoxStyled>
      <SelectLabel onClick={onToggleSelect} ref={targetEl}>
        <div>{value}</div>
        <AiFillCaretDown />
      </SelectLabel>
      {isSelect && (
        <ul>
          {selectData.map((data, index) => (
            <SelectOption
              key={data + index}
              type="button"
              value={data}
              parentWidth={targetEl.current?.clientWidth}
              onClick={onChangeValue}
            >
              {data}
            </SelectOption>
          ))}
        </ul>
      )}
    </SelectBoxStyled>
  );
}

export default SelectBox;

const SelectBoxStyled = styled.div`
  display: inline-block;
  width: 8rem;
  height: 3.3rem;
  min-height: 3rem;
  border: 1px solid ${palette.borderColor};
  background: ${palette.backgroundColor};
  color: ${palette.fontColor};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
  ul {
    border: 1px solid #999;
    position: absolute;
    background: #fff;
    border-top: none;
    margin: 1px 0 0 -1px;
    display: flex;
    flex-direction: column;
  }
  ${media.small} {
    height: 30px;
  }
`;
const SelectLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  min-width: 94px;
  height: 45px;
  height: 100%;
  border-radius: 6px;
  ${media.small} {
    height: 30px;
    height: 100%;
  }
  div {
    margin-top: 5px;
  }
`;

const SelectOption = styled.button`
  padding: 8px 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${({ parentWidth }) => parentWidth}px;
  border: 1px solid ${palette.borderColor};
  color: ${palette.fontColor};
  background: ${palette.backgroundColor};
  :hover {
    background: rgba(168, 156, 235, 0.35);
    color: ${palette.backgroundColor};
  }
`;
