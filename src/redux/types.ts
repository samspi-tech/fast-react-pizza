import type store from '@/redux/store.ts';
import type { CartItemTypes } from '@/features/cart/types.ts';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type UserState = {
    username: string;
};

export type CartState = {
    cart: CartItemTypes[];
};
