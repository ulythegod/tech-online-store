import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from 'pages/Home';
import CatalogPage from 'pages/CatalogPage';
import ProductDetailed from "pages/ProductDetailed";
import ContactUs from 'pages/ContactUs';
import Register from 'pages/Register';
import ShoppingCard from 'pages/ShoppingCard';
import Checkout from 'pages/Checkout';
import Dashboard from 'pages/Dashboard';
import AboutUs from 'pages/AboutUs';
import FAQ from 'pages/FAQ';
import Header from 'components/Header/Header';
import TopMenu from 'components/TopMenu/TopMenu';
import Footer from 'components/Footer/Footer';

import store from './store';
import { Provider } from 'react-redux';
import { fetchCategories } from './features/categories/categoriesSlice';
import { fetchProducts } from './features/products/productsSlice';

store.dispatch(fetchCategories());
store.dispatch(fetchProducts());

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router>
          <Header />
          <TopMenu />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/catalog/:categoryId" element={<CatalogPage />}/>
              <Route path="/product/:productId" element={<ProductDetailed />}/>
              <Route path="/contact-us" element={<ContactUs />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/shopping-card" element={<ShoppingCard />}/>
              <Route path="/checkout" element={<Checkout />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/about-us" element={<AboutUs />}/>
              <Route path="/faq" element={<FAQ />}/>
          </Routes>
          <Footer />
      </Router>
    </Provider>
  </>,
  document.getElementById('root')
);
