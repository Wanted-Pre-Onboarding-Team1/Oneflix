import FavoritePage from 'components/favoritePage/FavoritePage';
import SideNavbar from 'components/sideNavbar/SideNavbar';
import LandingPage from 'pages/LandingPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="favorites" element={<SideNavbar />} />
      </Route>
    </Routes>
  );
}

export default Routing;
