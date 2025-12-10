import { configureStore } from '@reduxjs/toolkit';
import userSlice from '@/redux/slices/userSlice.ts';

const store = configureStore({
    reducer: {
        user: userSlice,
    },
});

export default store;
