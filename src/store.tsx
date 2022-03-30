import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './features/products/productsSlice';

const store = configureStore({
    reducer: {
        products: productsReducer
    }
});

export default store;

//Определение типов RootState и AppDispatch из самого store
export type RootState = ReturnType<typeof store.getState>;

//Полученный тип: {products: ProductState}
export type AppDispatch = typeof store.dispatch;