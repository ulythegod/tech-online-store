import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState }  from '../../store';
import { Category } from '../../CustomTypes';

interface PromotedCategoryState {
    promotedCategories: Category[],
    code: number,
    message: string,
    status: string
}

const initialState: PromotedCategoryState = {
    promotedCategories: [],
    code: 0,
    message: "",
    status: "idle"
};

export const fetchPromotedCategories = createAsyncThunk(
    'promotedCategories/fetchPromotedCategories', 
    async () => {
        let result = await fetch('https://teststrapitest.herokuapp.com/promoted-categories');  

        return result.json();
    }
);

const promotedCategoriesSlice = createSlice({
    name: "promotedCategories",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPromotedCategories.fulfilled, (state: any, action: any) => {
                state.promotedCategories = [...action.payload.categories];
                state.status = "success";
            });
    }
});

export default promotedCategoriesSlice.reducer;

export const selectAllPromotedCategories = (state: RootState) => state.promotedCategories.promotedCategories;