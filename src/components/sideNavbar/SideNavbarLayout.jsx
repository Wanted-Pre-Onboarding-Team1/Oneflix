import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import LandingPage from 'pages/LandingPage';
import SideNavbar from './SideNavbar';

function SideNavbarLayout() {
  const location = useLocation();

  return (
    <NavbarLayout>
      <SideNavbar />
      {location.state && <LandingPage />}
      <Outlet />
    </NavbarLayout>
  );
}

export default SideNavbarLayout;

const NavbarLayout = styled.article`
  display: flex;
  background-color: ${palette.backgroundColor};
`;
