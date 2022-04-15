import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

let initialState: any[] = [];

const productsCardSlice = createSlice({
    name: "productsCard",
    initialState,
    reducers: {
        productAdded(state, action) {
            state.push(action.payload);
        },
        productRemoved(state, action) {
            return state.filter((productId) => productId !== action.payload)     
        },
        clearCard(state, action) {
            return []
        },
        decreaseAmount(state, action) {            
            const {productId, quantity} = action.payload;        

            state = state.filter((id) => id !== productId);
            
            for (let i = 0; i < (quantity - 1); i++) {
                state.push(productId);
            }         

            return state;
        },
        changeAmount(state, action) {            
            const {productId, quantity} = action.payload;        

            state = state.filter((id) => id !== productId);
            
            for (let i = 0; i < quantity; i++) {
                state.push(productId);
            }         

            return state;
        }
    }
});

export default productsCardSlice.reducer;

export const selectAllProductsIds = (state: RootState) =>  state.productsCard;

export const { 
    productAdded, 
    productRemoved, 
    clearCard,
    decreaseAmount,
    changeAmount 
} = productsCardSlice.actions;