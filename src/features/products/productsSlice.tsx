import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState }  from '../../store';

interface ProductState {
    products: any[],
    code: number,
    message: string,
    status: string
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
        let result = await fetch('https://teststrapitest.herokuapp.com/products?_limit=20');  

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
                state.products.push(action.payload);
                state.products.products = "success";
            })
    }
});

export default productsSlice.reducer;

export const selectAllProducts = (state: RootState) => state.products.products;