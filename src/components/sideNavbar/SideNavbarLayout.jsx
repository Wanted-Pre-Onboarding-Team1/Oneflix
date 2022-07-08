import { palette } from 'lib/styles/palette';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SideNavbar from './SideNavbar';

// MainNavbar
function SideNavbarLayout(props) {
  return (
    <NavbarLayout>
      <SideNavbar />
      <Outlet />
    </NavbarLayout>
  );
}

export default SideNavbarLayout;

const NavbarLayout = styled.article`
  display: flex;
  background-color: ${palette.backgroundColor};
`;
