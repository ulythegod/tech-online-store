import { 
    createSlice, 
    createAsyncThunk,
    createEntityAdapter 
} from "@reduxjs/toolkit";
import { RootState } from "store";

interface CategoriesState {
    categories: any[],
    code: number,
    message: string,
    status: string
}

const initialState: CategoriesState = {
    categories: [],
    code: 0,
    message: "",
    status: "idle"
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        let result = await fetch('https://teststrapitest.herokuapp.com/categories?_sort=id');  

        return result.json();
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.fulfilled, (state: any, action: any) => {
                state.categories.push(action.payload);
                state.status = "success";
            })
    }
});

export default categoriesSlice.reducer;

export const selectAllCategories = (state: RootState) => state.categories.categories;

export const selectCategoryById = (state: RootState, categoryId: number) => {    
    if (state.categories.categories.length > 0) {
        return state.categories.categories[0].find(
            (category: any) => category.id === categoryId
        )
    }    
}

export const selectParentCategories = (state: RootState) => {
    let categories: any[] = [];    

    if (state.categories.categories.length > 0) {        
        state.categories.categories[0].forEach((category: any) => {
            if (category.subCategories.length > 0 && category.parent === null) {
                categories.push(category);
            }
        });
    }

    return categories;
}