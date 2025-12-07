import { createOrder } from '@/services/restaurant.service';
import type { CartItem } from '../cart/types';
import { redirect } from 'react-router';
import type { FormData } from './types';

export const createOrderAction = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as FormData;

    const cart: CartItem = JSON.parse(data.cart);

    const order = {
        ...data,
        cart,
        priority: data.priority === 'on',
    };

    const newOrder = await createOrder(order);

    return redirect(`/order/${newOrder.id}`);
};
