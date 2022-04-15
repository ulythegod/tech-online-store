import React, { ReactElement, FC } from "react";
import { render } from "@testing-library/react";
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

import { AppProvider } from './components/AppProvider/AppProvider';

const Wrapper: FC = ({ children }) => {
    return (
        <AppProvider>
            <Router>
                <Header />
                <TopMenu />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path={`/product/${47}`} element={children} />
                </Routes>
                <Footer />
            </Router>
        </AppProvider>
    )
}

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };