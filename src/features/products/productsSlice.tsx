import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { RootState }  from '../../store';
import { allChildCategoriesSelector } from '../categories/categoriesSlice';
import { selectAllPrices } from '../prices/pricesSlice';
import { 
    ProductState,
    Product, 
    FillersInterface, 
    Price,
    CatalogProductsResult
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

export const selectProductById = (state: RootState, id: number) => {
    let productRes: Product = {
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
    };

    if (state.products.products) {
        state.products.products.forEach((product: Product) => {
            if (product.id === id) {
                productRes = product;
            }
        });
    }

    return productRes;
}

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

        return result;
    }
);

function byField(field: string) {
    if (field === "price") {
       return (a: Product, b: Product) => Number(a[field as keyof Product]) > Number(b[field as keyof Product]) ? 1 : -1; 
    }
    
    return (a: Product, b: Product) =>a[field as keyof Product] > b[field as keyof Product] ? 1 : -1; 
}

export const sortedAndFilteredProductsSelector = createSelector(
    filteredProductsSelector,
    (state: RootState, appliedFilters: FillersInterface) => appliedFilters.sortField,
    (products: Product[], sorting: string) => {
        let result: Product[] = [];       
        
        if (sorting) {
            result = products.sort(byField(sorting));
        } else {
            result = products.sort(byField("name"));
        }

        return result;
    }
);

export const perPageProductsSelector = createSelector(
    sortedAndFilteredProductsSelector,
    (state: RootState, appliedFilters: FillersInterface) => appliedFilters.currentPage,
    (state: RootState, appliedFilters: FillersInterface) => appliedFilters.perPageItems,
    (products: Product[], currentPage: number, perPageItems: number) => {
        let result: CatalogProductsResult = {
            products: [],
            startIndex: 0,
            endIndex: 0,
            overallAmount: 0
        };

        let lastIndex: number = products.length - 1;
        if (currentPage && perPageItems) {
            let startIndex: number = Number((currentPage - 1)) * perPageItems;
            let endIndex: number = Number(startIndex) + Number(perPageItems);

            if (endIndex > lastIndex) {
                endIndex = lastIndex;
            }           

            result.overallAmount = products.length;
            if (endIndex === lastIndex) {                
                result.products = products.slice(startIndex);
            } else {
                result.products = products.slice(startIndex, endIndex);
            }

            result.startIndex = startIndex;

            if (endIndex === lastIndex) {
                result.endIndex = result.overallAmount;
            } else {
                result.endIndex = endIndex;
            }            
        }        

        return result;
    }
);

export const selectProductsByIds = (state: RootState, productsIds: number[]) => {
    let products: Product[] = [];

    if (state.products.products && productsIds.length) {
        if (state.products.products.length > 0) {
            state.products.products.forEach((product: Product) => {
                if (productsIds.includes(product.id)) {
                    products.push(product);
                }                
            });
        }
    }

    return products;
}
