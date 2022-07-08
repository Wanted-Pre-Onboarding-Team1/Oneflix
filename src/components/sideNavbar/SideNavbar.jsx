import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiSearch, FiExternalLink } from 'react-icons/fi';
import { palette } from 'lib/styles/palette';
import { NavLink } from 'react-router-dom';

export default function SideNavbar() {
  const [isToggled, setToggle] = useState(false);

  const toggleSideMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <SideNavbarLayout>
      <ToggleButton onClick={toggleSideMenu}>
        <FiMenu />
      </ToggleButton>
      {!isToggled && (
        <Menu>
          <h1>Watchlists</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="search">
                  <FiSearch /> Search
                </NavLink>
              </li>
              <li>
                <NavLink to="like">
                  <FiExternalLink /> Like{' '}
                </NavLink>
              </li>
            </ul>
          </nav>
        </Menu>
      )}
    </SideNavbarLayout>
  );
}

const SideNavbarLayout = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${palette.backgroundColorSide};
`;

const ToggleButton = styled.button`
  color: ${palette.hilightColor};
  font-size: 1.5rem;
  position: fixed;
  top: 12px;
  left: 16px;
  z-index: 10;
`;

const Menu = styled.section`
  padding: 40px 32px;
  position: sticky;
  top: 0;

  & li {
    display: flex;
    align-items: center;
    height: 40px;
    width: 150px;
    background: ${palette.tabColorSide};
    margin-bottom: 20px;
    border-radius: 6px;
    padding: 10px 12px;
  }
  & h1 {
    color: ${palette.hilightColor};
    font-size: 2rem;
    margin-bottom: 20px;
  }
  & nav,
  & a {
    color: ${palette.textColorSide};
  }
  & hr {
    margin-bottom: 20px;
  }
`;
