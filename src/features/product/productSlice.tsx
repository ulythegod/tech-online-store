import { 
    createSlice, 
    createAsyncThunk
} from "@reduxjs/toolkit";
import { RootState } from "store";
import { Product } from '../../CustomTypes';

interface ProductState {
    product: Product,
    code: number,
    message: string,
    status: string
}

const initialState: ProductState = {
    product: {
        id: 0,
        published_at: "",
        created_at: "",
        updated_at: "",
        category: {
            id: 0,
            subCategories: [],
            parent: null,
            name: "",
            created_at: "",
            updated_at: "",
            image: {
                id: 0,
                url: ""
            }
        },
        name: "",
        price: "",
        photo: [],
        details: [],
        specs: []
    },
    code: 0,
    message: "",
    status: "idle"
}

export const fetchProductById = createAsyncThunk(
    'product/fetchProductById',
    async (productId: number) => {
        const result = await fetch(`https://teststrapitest.herokuapp.com/products/${productId}`);
        return result.json();
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProductById.fulfilled, (state: any, action: any) => {
                state.product = action.payload;
                state.status = "success";
            })
    }
})

export default productSlice.reducer;

export const selectProduct = (state: RootState) => state.product.product;