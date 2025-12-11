import type { CartState, RootState } from '@/redux/types.ts';
import {
    createSelector,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';
import type { CartItemTypes } from '@/features/cart/types.ts';

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItemTypes>) => {
            state.cart.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(
                ({ pizzaId }) => pizzaId !== action.payload
            );
        },
        increaseItemQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cart.find(
                ({ pizzaId }) => pizzaId === action.payload
            )!;

            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cart.find(
                ({ pizzaId }) => pizzaId === action.payload
            )!;

            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if (item.quantity === 0) {
                cartSlice.caseReducers.removeItem(state, action);
            }
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const {
    addItem,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = createSelector(
    [(state: RootState) => state.cart],
    ({ cart }) => cart
);

export const getTotalCartPrice = createSelector(
    [(state: RootState) => state.cart],
    ({ cart }) => {
        return cart.reduce((sum, item) => sum + item.totalPrice, 0);
    }
);

export const getTotalCartQuantity = createSelector(
    [(state: RootState) => state.cart],
    ({ cart }) => {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    }
);

export const getCurrentPizzaQuantityById = (id: number) =>
    createSelector([(state: RootState) => state.cart], ({ cart }) => {
        const item = cart.find((item) => item.pizzaId === id);

        return item?.quantity ?? 0;
    });
