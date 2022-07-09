import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiSearch, FiExternalLink } from 'react-icons/fi';
import { palette } from 'lib/styles/palette';

export default function SideNavbar() {
  const [isToggled, setToggle] = useState(false);

  const toggleSideMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Navbar>
      <ToggleButton onClick={toggleSideMenu}>
        <FiMenu />
      </ToggleButton>
      {!isToggled && (
        <Menu>
          <NavLink to="/">
            <Logo>Watchlists</Logo>
          </NavLink>
          <SidebarMenu>
            <ul>
              <MenuBtnItem>
                <Move to="search">
                  <FiSearch /> Search
                </Move>
              </MenuBtnItem>
              <MenuBtnItem>
                <Move to="like">
                  <FiExternalLink /> Like{' '}
                </Move>
              </MenuBtnItem>
            </ul>
          </SidebarMenu>
        </Menu>
      )}
    </Navbar>
  );
}

const { sideBackgroundColor, highlightColor, sideTextColor, sideTabColor } =
  palette;

const Navbar = styled.aside`
  display: flex;
  flex-direction: column;
  background: ${sideBackgroundColor};
  height: auto;
  min-height: 100vh;
`;
const ToggleButton = styled.button`
  color: ${highlightColor};
  font-size: 1.5rem;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
`;
const Menu = styled.section`
  padding: 40px 32px;
  position: sticky;
  top: 30px;
  display: ${({ isToggled }) => (isToggled ? 'none' : 'block')};
`;
const Logo = styled.h1`
  color: ${highlightColor};
  font-size: 2rem;
  margin-bottom: 20px;
`;
const SidebarMenu = styled.nav`
  color: ${sideTextColor};
`;
const MenuBtnItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  background: ${sideTabColor};
  margin-bottom: 20px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Move = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: ${sideTextColor};
  align-items: center;
`;
