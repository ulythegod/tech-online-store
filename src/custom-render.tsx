import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header/Header';
import TopMenu from './components/TopMenu/TopMenu';
import Footer from './components/Footer/Footer';
import { FunctionComponent } from './CustomTypes';

import { AppProvider } from './components/AppProvider/AppProvider';

const Wrapper: FunctionComponent = ({ children }) => {
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