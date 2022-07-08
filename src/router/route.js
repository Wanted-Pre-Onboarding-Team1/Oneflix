import SearchPage from 'pages/SearchPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default Routing;
