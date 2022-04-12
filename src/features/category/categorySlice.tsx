import { 
    createSlice, 
    createAsyncThunk
} from "@reduxjs/toolkit";
import { RootState } from "store";
import { Category } from '../../CustomTypes';

interface CategoryState {
    category: Category,
    code: number,
    message: string,
    status: string
}

const initialState: CategoryState = {
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
    code: 0,
    message: "",
    status: "idle"
}

export const fetchCategoryById = createAsyncThunk(
    'category/fetchCategoryById',
    async (categoryId: number) => {
        const result = await fetch(`https://teststrapitest.herokuapp.com/categories/${categoryId}`);
        return result.json();
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCategoryById.fulfilled, (state: any, action: any) => {
                state.category = action.payload;
                state.status = "success";
            })
    }
});

export default categorySlice.reducer;

export const selectCategory = (state: RootState) => state.category.category;