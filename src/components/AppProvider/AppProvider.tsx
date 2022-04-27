import React from "react";
import store from '../../store';
import { Provider } from 'react-redux';
import { fetchCategories } from '../../features/categories/categoriesSlice';
import { fetchProducts } from '../../features/products/productsSlice';
import { FunctionComponent } from 'CustomTypes';
import { fetchProductById } from "../../features/product/productSlice";

store.dispatch(fetchCategories());
store.dispatch(fetchProducts());
store.dispatch(fetchProductById(47));

export const AppProvider: FunctionComponent = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
