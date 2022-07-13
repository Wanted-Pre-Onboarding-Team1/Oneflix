import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from 'lib/styles/media';
import {
  FiMenu as MenuIcon,
  FiSearch as SearchIcon,
  FiHeart as LikeIcon,
  FiHome as HomeIcon,
} from 'react-icons/fi';
import { palette } from 'lib/styles/palette';

export default function SideNavbar() {
  const [isToggled, setToggle] = useState(false);

  const toggleSideMenu = () => {
    setToggle((prevToggleState) => !prevToggleState);
  };

  return (
    <Navbar isToggled={isToggled}>
      <ToggleButton onClick={toggleSideMenu}>
        <MenuIcon />
      </ToggleButton>
      <Menu isToggled={isToggled}>
        <Move to="/">
          <Logo>
            <StyledHomeIcon />
            <img src="/assets/ONEFLIX.svg" alt="원플릭스 로고" />
          </Logo>
        </Move>
        <SidebarMenu>
          <ul>
            <MenuBtnItem>
              <Move to="search">
                <SearchIcon />
                <span>Search</span>
              </Move>
            </MenuBtnItem>
            <MenuBtnItem>
              <Move to="like">
                <LikeIcon />
                <span>Like</span>
              </Move>
            </MenuBtnItem>
          </ul>
        </SidebarMenu>
      </Menu>
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
  transition: all 300ms ease-in;
  width: ${({ isToggled }) => (isToggled ? '0' : '33vw')};
  ${media.small} {
    width: ${({ isToggled }) => (isToggled ? '0' : '15vw')};
    & a span {
      display: none;
    }
  }
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
  transition: all 300ms ease-in;
  visibility: ${({ isToggled }) => (isToggled ? 'hidden' : 'visible')};
  color: ${sideTextColor};
  height: 120px;
  ${media.small} {
    padding: 40px 16px;
    & > a {
      display: flex;
      background: ${sideTabColor};
      margin-bottom: 20px;
      border-radius: 6px;
      height: 40px;
    }
    & a h1 img {
      display: none;
    }
  }
`;
const Logo = styled.h1`
  img {
    width: 15rem;
  }
`;
const SidebarMenu = styled.nav`
  color: ${sideTextColor};
  margin-top: 2rem;
`;
const MenuBtnItem = styled.li`
  display: flex;
  background: ${sideTabColor};
  margin-bottom: 20px;
  border-radius: 6px;
  height: 40px;
`;
const Move = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: ${sideTextColor};
  align-items: center;
`;
const StyledHomeIcon = styled(HomeIcon)`
  display: none;
  ${media.small} {
    display: block;
  }
`;
