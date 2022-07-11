import SearchPage from 'pages/SearchPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from 'pages/ModalMovieDetail';
import SideNavbarLayout from 'components/sideNavbar/SideNavbarLayout';
import LandingPage from 'pages/LandingPage';
import LikePage from 'pages/LikePage';
import { useLocation } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route element={<SideNavbarLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:title" element={<SearchPage />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
