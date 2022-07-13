import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import SideNavbar from './SideNavbar';

function AppLayout() {
  return (
    <MainAppWrap>
      <SideNavbar />
      <Outlet />
    </MainAppWrap>
  );
}

export default AppLayout;

const MainAppWrap = styled.article`
  display: flex;
  background-color: ${palette.backgroundColor};
`;
