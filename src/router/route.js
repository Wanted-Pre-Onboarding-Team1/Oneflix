import SearchPage from 'pages/SearchPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from 'pages/DetailPage';

function Routing() {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path=":id" element={<DetailPage />} />
    </Routes>
  );
}

export default Routing;
