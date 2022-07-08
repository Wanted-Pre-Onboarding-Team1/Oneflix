import { palette } from 'lib/styles/palette';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavbar from './SideNavbar';

// MainNavbar
function SideNavbarLayout(props) {
  return (
    <article
      style={{
        display: 'flex',
        backgroundColor: `${palette.backgroundColor}`,
      }}
    >
      <SideNavbar />
      <Outlet />
    </article>
  );
}

export default SideNavbarLayout;
