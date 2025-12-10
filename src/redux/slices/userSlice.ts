import type { UserState } from '@/redux/types.ts';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
    username: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
    },
});

export const { updateState } = userSlice.actions;

export default userSlice.reducer;
