import type { RootState, UserState } from '@/redux/types.ts';
import {
    createSelector,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';
import type { UserGeoPosition } from '@/services/types.ts';
import { fetchAddress } from '@/redux/thunks.ts';

const initialState: UserState = {
    username: '',
    status: 'idle',
    position: {} as UserGeoPosition,
    address: '',
    error: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchAddress.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAddress.fulfilled, (state, action) => {
                state.position = action.payload.position;
                state.address = action.payload.address;
                state.status = 'idle';
            })
            .addCase(fetchAddress.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;

export const getUsername = createSelector(
    [(state: RootState) => state.user],
    (user) => user.username
);
