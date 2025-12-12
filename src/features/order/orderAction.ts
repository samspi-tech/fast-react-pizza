import { createOrder } from '@/services/restaurant.service';
import type { CartItemTypes } from '../cart/types';
import { redirect } from 'react-router';
import type { CreateOrderType, FormData, FormErrors } from './types';
import { isValidPhone } from '@/utils/helpers';
import store from '@/redux/store.ts';
import { clearCart } from '@/redux/slices/cartSlice.ts';

export const createOrderAction = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as FormData;

    const cart: CartItemTypes = JSON.parse(data.cart);

    const order: CreateOrderType = {
        ...data,
        cart,
        priority: data.priority === 'true',
    };

    const errors: FormErrors = {
        phone: '',
    };

    if (!isValidPhone(order.phone)) {
        errors.phone = 'Phone number is not a valid number.';

        return errors;
    }

    const newOrder = await createOrder(order);

    store.dispatch(clearCart());

    return redirect(`/order/${newOrder.id}`);
};
