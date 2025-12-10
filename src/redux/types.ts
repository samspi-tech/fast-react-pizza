import type store from '@/redux/store.ts';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type UserState = {
    username: string;
};
