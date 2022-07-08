import LandingPage from 'pages/LandingPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from 'pages/DetailPage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path=":id" element={<DetailPage />} />
    </Routes>
  );
}

export default Routing;
