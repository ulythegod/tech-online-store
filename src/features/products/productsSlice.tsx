import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { RootState }  from '../../store';
import { allChildCategoriesSelector } from '../categories/categoriesSlice';
import { selectAllPrices } from 'features/prices/pricesSlice';
import { 
    ProductState, 
    Photo, 
    Detail, 
    Spec, 
    Product, 
    Category, 
    FillersInterface, 
    Price 
} from '../../CustomTypes';

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

    if (state.products.products) {
        state.products.products.forEach((product: Product) => {
            if (categoriesIds.includes(product.category.id)) {
                products.push(product);
            }
        });
    }

    return products;
}

export const selectProductsAmountForPrices = createSelector(
    selectProductsByCategoryId,
    selectAllPrices,
    (products: Product[], prices: Price[]) => {
        let amounts: any[] = [];       
        
        if (prices) {
            prices.forEach((price: Price) => {
                let productForPrice: Product[] = [];
                if (products) {
                    products.forEach((product: Product) => {
                        if (Number(product.price) >= price.segmentValues[0] && Number(product.price) < price.segmentValues[1]) {
                            productForPrice.push(product);
                        }
                    });
                }
                
                amounts[price.id] = productForPrice.length;
            });
        }

        return amounts;
    }
);

export const filteredProductsSelector = createSelector(
    (state: RootState) => state.products.products,
    allChildCategoriesSelector,
    (state: RootState, appliedFilters: FillersInterface) => appliedFilters,
    (products: Product[], categoriesIds: number[], filter: FillersInterface) => {        
        let result: Product[] = [];

        let productsPricesFind: Product[] = [];
        products.forEach((product: Product, id: number) => {
            if (categoriesIds.includes(product.category.id)) {
                if (filter.prices.length) {
                    filter.prices.forEach((price: Price, id: number) => {
                        if (Number(product.price) > price.segmentValues[0] && Number(product.price) <= price.segmentValues[1]) {
                            productsPricesFind.push(product);
                        }
                    })                  
                } else if (filter.defaultPrices.length) {
                    filter.defaultPrices.forEach((price: Price, id: number) => {
                        if (Number(product.price) > price.segmentValues[0] && Number(product.price) <= price.segmentValues[1]) {
                            productsPricesFind.push(product);
                        }
                    })
                }
            }
        });

        if (filter.name) {
            productsPricesFind.forEach((product: Product, id: number) => {
                let lowercaseName = product.name.toLowerCase();
                let lowercaseInput = filter.name.toLowerCase();               

                if (lowercaseName === lowercaseInput || lowercaseName.indexOf(lowercaseInput) !== -1) {
                    result.push(product);
                }
            });
        } else {
            result = productsPricesFind
        }

        console.log(result);                

        return result;
    }
);
