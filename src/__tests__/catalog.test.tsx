import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import { render, fireEvent } from "@testing-library/react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from 'components/Header/Header';
import TopMenu from 'components/TopMenu/TopMenu';
import CatalogPage from 'pages/CatalogPage';

import store from '../store';
import { Provider } from 'react-redux';
import { fetchCategories } from '../features/categories/categoriesSlice';
import { fetchProducts } from '../features/products/productsSlice';

test("checks amount of products that is shown on thw page", () => {
    store.dispatch(fetchCategories());
    store.dispatch(fetchProducts());

    // <Provider store={store}>
    //     <Router>
    //         <Header />
    //         <TopMenu />
    //         <Routes>
    //             <Route path="/catalog/:categoryId" element={<CatalogPage />}/>
    //         </Routes>
    //     </Router>
    // </Provider>
})
