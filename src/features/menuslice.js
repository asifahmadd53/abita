import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statusTab: false
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleStatusTab(state) {
            state.statusTab = !state.statusTab;
        }
    }
});

// Export the action creator
export const { toggleStatusTab } = menuSlice.actions;

// Export the reducer
export default menuSlice.reducer;
