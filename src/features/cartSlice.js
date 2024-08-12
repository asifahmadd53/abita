import { createSlice } from "@reduxjs/toolkit";


const saveToLocalStorage = (state) => {
    localStorage.setItem('cartState', JSON.stringify(state));
};

const loadInitialState = () => {
    const storedState = localStorage.getItem('cartState');
    if (storedState) {
        return JSON.parse(storedState);
    }
    return {
        items: []
    };
};

const initialState = loadInitialState();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity });
            }
            saveToLocalStorage(state); // Save state to localStorage
        },
        deleteCart(state, action) {
            const { productId } = action.payload;
            state.items = state.items.filter(item => item.productId !== productId);
            saveToLocalStorage(state); 
        },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                if (quantity > 0) {
                    state.items[indexProductId].quantity = quantity;
                } else {
                    state.items = state.items.filter(item => item.productId !== productId);
                }
                saveToLocalStorage(state); 
            }
        }
    }
});

export const { addToCart, deleteCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
