import type { CartState } from '@/redux/types.ts';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
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
