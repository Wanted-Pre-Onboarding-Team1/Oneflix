import SearchPage from 'pages/SearchPage';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SideNavbarLayout from 'components/sideNavbar/SideNavbarLayout';
import LandingPage from 'pages/LandingPage';
import LikePage from 'pages/LikePage';
import ModalMovieDetail from 'components/detailModal/ModalMovieDetail';

function Routing() {
  const location = useLocation();
  console.log(location);
  const background = location.state && location.state.background;

  return (
    <Routes location={!background || location}>
      <Route element={<SideNavbarLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:title" element={<SearchPage />} />
        <Route path="/like" element={<LikePage />} />
        {background && (
          <Route path="/detail/:id" element={<ModalMovieDetail />} />
        )}
        {/* 검색 결과 페이지 표시용 라우터 */}
        <Route path="/like/:title" element={<LikePage />} />
      </Route>
    </Routes>
  );
}

export default Routing;
