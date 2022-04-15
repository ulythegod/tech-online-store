import React, { ReactElement, FC } from "react";
import store from '../../store';
import { Provider } from 'react-redux';
import { fetchCategories } from 'features/categories/categoriesSlice';
import { fetchProducts } from 'features/products/productsSlice';

store.dispatch(fetchCategories());
store.dispatch(fetchProducts());

export const AppProvider: FC = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
