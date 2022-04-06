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
                state.products.push(action.payload);
                state.status = "success";
            })
    }
});

export default productsSlice.reducer;

export const selectAllProducts = (state: RootState) => state.products.products;

export const selectProductsByCategoryId = (state: RootState, categoryId: number) => {
    let products: any[] = [];

    if (state.products.products[0]) {
        state.products.products[0].forEach((product: any) => {
            if (product.category.id === categoryId) {
                products.push(product);
            }
        });
    }
       

    return products;
}