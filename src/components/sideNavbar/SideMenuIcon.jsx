import React from 'react';
import { useMemo } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';

export default function SideMenuIcon(props) {
  const value = useMemo(() => {
    return { color: 'white', size: '1.5rem' };
  });
  return (
    <IconContext.Provider value={value}>
      <button type="button">
        <FiMenu />
      </button>
    </IconContext.Provider>
  );
}
