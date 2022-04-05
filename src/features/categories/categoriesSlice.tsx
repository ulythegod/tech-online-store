import { 
    createSlice, 
    createAsyncThunk,
    createEntityAdapter 
} from "@reduxjs/toolkit";
import { RootState } from "store";

interface CategoryState {
    categories: any[],
    code: number,
    message: string,
    status: string
}

const initialState: CategoryState = {
    categories: [],
    code: 0,
    message: "",
    status: "idle"
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        let result = await fetch('https://teststrapitest.herokuapp.com/categories');  

        return result.json();
    }
);

// export const fetchCategoryById = createAsyncThunk(
//     'categories/fetchCategoryById',
//     async (categoryId) => {
//         let result = await fetch(`https://teststrapitest.herokuapp.com/categories/${categoryId}`);

//         return result.json();
//     }
// )

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
            // .addCase(fetchCategoryById.fulfilled, (state: any, action: any) => {
            //     state.category = action.payload;
            //     state.status = "success";
            // })
    }
});

export default categoriesSlice.reducer;

export const selectAllCategories = (state: RootState) => state.categories.categories;

export const selectCategoryById = (state: RootState, id: number): any => {
    console.log(id);    
    
    if (state.categories.categories.length > 0 && state.categories.categories[0].length > 0) {
        state.categories.categories[0].map((category: any) => {            
            if (category.id === id) {
                console.log('???');
                console.log(category);                

                return category;
            }

            return {};
        })
    }
    
};