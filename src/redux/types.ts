import type store from '@/redux/store.ts';
import type { CartItemTypes } from '@/features/cart/types.ts';
import type { UserGeoPosition } from '@/services/types.ts';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type UserState = {
    username: string;
    status: 'idle' | 'loading' | 'error';
    position: UserGeoPosition;
    address: string;
    error?: string;
};

export type CartState = {
    cart: CartItemTypes[];
};
