import { configureStore } from '@reduxjs/toolkit';
import menuslice from '../features/menuslice';
import cartSlice from '../features/cartSlice';
import favouriteSlice from '../features/favouriteSlice';

export const store = configureStore({
    reducer: {
        menu: menuslice,
        cart:cartSlice,
        favourite: favouriteSlice
    }
});
