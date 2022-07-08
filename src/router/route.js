import LandingPage from 'pages/LandingPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from 'pages/DetailPage';
import SideNavbarLayout from 'components/sideNavbar/SideNavbarLayout';

function Routing() {
  return (
    <Routes>
      <Route element={<SideNavbarLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path=":id" element={<DetailPage />} />
      </Route>
      {/* <Route path="/" element={<SideNavbar />}>
        <Route path="main" element={<LandingPage />} />
        <Route path=":id" element={<DetailPage />} />
      </Route> */}
    </Routes>
  );
}

export default Routing;
