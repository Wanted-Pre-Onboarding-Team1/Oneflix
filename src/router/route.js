import LandingPage from 'pages/LandingPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default Routing;
