import { 
    createSlice, 
    createAsyncThunk,
    createEntityAdapter 
} from "@reduxjs/toolkit";
import { Product } from '../products/productsSlice';
import { createSelector } from 'reselect';
import { RootState } from "store";

interface CategoriesState {
    categories: Category[],
    code: number,
    message: string,
    status: string
}

interface Image {
    id: number,
    url: string
}

export interface Category {
    id: number,
    subCategories: Category[],
    parent: Category | null,
    name: string,
    created_at: string,
    updated_at: string,
    image: Image
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
                state.categories = [...action.payload];
                state.status = "success";
            })
    }
});

export default categoriesSlice.reducer;

export const selectAllCategories = (state: RootState) => state.categories.categories;

export const selectCategoryById = (state: RootState, categoryId: number) => {    
    if (state.categories.categories.length > 0) {
        return state.categories.categories.find(
            (category) => category.id === categoryId
        )
    }    
}

export const selectParentCategories = (state: RootState) => {
    let categories: Category[] = [];    

    if (state.categories.categories.length > 0) {        
        state.categories.categories.forEach((category) => {
            if (category.subCategories.length > 0 && category.parent === null) {
                categories.push(category);
            }
        });
    }

    return categories;
}

export const selectCategoriesProductsAmount = (state: RootState, categoriesIds: number[]) => {
    let categories: Category[] = [];

    if (state.categories.categories.length > 0 && categoriesIds.length > 0) {        
        if (state.products.products.length > 0) {            
            categoriesIds.forEach((categoryId: number) => {
                let categoryProducts: any[] = [];
                
                state.products.products.forEach((product: Product) => {                                  
                    if (product.category.id == categoryId) {
                        categoryProducts.push(product);
                    }
                });                

                let category: any = {
                    id: categoryId,
                    productsAmount: categoryProducts.length
                }

                categories[categoryId] = category;
            });            
        }        
    }

    return categories;
}

export const selectCategoriesIds = createSelector(
    selectCategoryById,
    (filteredCategory): number[] => {
        if (!filteredCategory) {
            return [];
        }

        let categoriesIds: number[] = [filteredCategory.id];
        filteredCategory.subCategories.forEach((subcategory) => {
            categoriesIds.push(Number(subcategory.id));
        })

        return categoriesIds;        
    }
)