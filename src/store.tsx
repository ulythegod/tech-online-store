import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './features/products/productsSlice';
import promotedCategoriesReducer from './features/promoted-categories/promotedCategoriesSlice';
import categoriesReducer from './features/categories/categoriesSlice';
import categoryReducer from "features/category/categorySlice";
import productReduser from "features/product/productSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        promotedCategories: promotedCategoriesReducer,
        categories: categoriesReducer,
        category: categoryReducer,
        product: productReduser
    }
});

export default store;

//Определение типов RootState и AppDispatch из самого store
export type RootState = ReturnType<typeof store.getState>;

//Полученный тип: {products: ProductState}
export type AppDispatch = typeof store.dispatch;