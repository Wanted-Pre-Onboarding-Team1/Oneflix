import React from 'react';
import styled from 'styled-components';
import { AiFillCaretDown } from 'react-icons/ai';
import useToggle from 'hooks/common/useToggle';
import useOutSideClick from 'hooks/common/useOutsideClick';
import media from 'lib/styles/media';

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
  width: 120px;
  border: 1px solid #999;
  background: #fff;
  cursor: pointer;
  ul {
    list-style-type: none;
    padding-left: 0px;
    width: 120px;
    border: 1px solid #999;
    position: absolute;
    background: #fff;
    border-top: none;
    margin: 1px 0 0 -1px;
    display: flex;
    flex-direction: column;
  }
`;
const SelectLabel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 5px;
  align-items: center;
  height: 45px;
  border-radius: 6px;
  ${media.small} {
    height: 30px;
  }
`;

const SelectOption = styled.button`
  padding: 8px 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    background: rgba(168, 156, 235, 0.35);
  }
`;
