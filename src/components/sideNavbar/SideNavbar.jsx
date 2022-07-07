import React from 'react';
import styled from 'styled-components';
import { FiSearch, FiExternalLink } from 'react-icons/fi';
import { palette } from 'lib/styles/palette';
import { NavLink } from 'react-router-dom';

export default function SideNavbar(props) {
  return (
    <SideNavbarLayout>
      <h1>Watchlists</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="search">
              <FiSearch /> Search
            </NavLink>
          </li>
          <li>
            <NavLink to="favorites">
              <FiExternalLink /> Favorites{' '}
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <a href="/">My Lists</a>
    </SideNavbarLayout>
  );
}

const SideNavbarLayout = styled.section`
  padding: 20px 30px;
  width: 30%;
  max-width: 320px;
  background: ${palette.backgroundColorSide};

  & li {
    display: flex;
    align-items: center;
    height: 42px;
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
  @media (max-width: 740px) {
    display: none;
  }
`;
