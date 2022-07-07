import FavoritePage from 'components/favoritePage/FavoritePage';
import LandingPage from 'pages/LandingPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="favorites" element={<FavoritePage />} />
    </Routes>
  );
}

export default Routing;
