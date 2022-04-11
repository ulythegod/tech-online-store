import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState }  from '../../store';
import { Category } from '../categories/categoriesSlice';

interface ProductState {
    products: Product[],
    code: number,
    message: string,
    status: string
}

interface Photo {
    id: number,
    url: string
}

interface Detail {
    id: number,
    name: string
}

interface Spec {
    id: number,
    spec: string,
    value: string
}

export interface Product {
    id: number,
    published_at: string,
    created_at: string,
    updated_at: string,
    category: Category,
    name: string,
    price: string,
    photo: Photo,
    details: Detail[],
    specs: Spec[]
}

const initialState: ProductState = {
    products: [],
    code: 0,
    message: "",
    status: "idle"
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts', 
    async () => {
        let result = await fetch('https://teststrapitest.herokuapp.com/products');  

        return result.json();
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.fulfilled, (state: any, action: any) => {                                      
                state.products = [...action.payload];
                state.status = "success";
            })
    }
});

export default productsSlice.reducer;

export const selectAllProducts = (state: RootState) => state.products.products;

export const selectProductsByCategoryId = (state: RootState, categoriesIds: number[]) => {
    let products: Product[] = [];

    if (state.products.products[0]) {
        state.products.products.forEach((product: Product) => {
            if (categoriesIds.includes(product.category.id)) {
                products.push(product);
            }
        });
    }

    return products;
}