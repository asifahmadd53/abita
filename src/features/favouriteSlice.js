import { createSlice } from "@reduxjs/toolkit";

// Function to save state to local storage
const saveToLocalStorage = (state) => {
    localStorage.setItem('favouriteState', JSON.stringify(state));
};

// Function to load initial state from local storage
const loadInitialState = () => {
    const storedState = localStorage.getItem('favouriteState');
    if (storedState) {
        return JSON.parse(storedState);
    }
    return {
        favourites: []
    };
};

const initialState = loadInitialState();

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addToFavourite(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.favourites.findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.favourites[indexProductId].quantity += quantity;
            } else {
                state.favourites.push({ productId, quantity });
            }
            saveToLocalStorage(state); // Save state to localStorage
        }
    }
});

export const { addToFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
