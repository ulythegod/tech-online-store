import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from 'pages/Home';
import CatalogPage from 'pages/CatalogPage';
import Header from 'components/Header/Header';
import TopMenu from 'components/TopMenu/TopMenu';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';
import Footer from 'components/Footer/Footer';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <>
    <Header />
    <Router>
        <TopMenu />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/catalog" element={<CatalogPage />}/>
        </Routes>
    </Router>
    <AdvantagesSection />
    <Footer />
  </>,
  document.getElementById('root')
);
