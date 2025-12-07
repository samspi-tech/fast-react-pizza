import { createOrder } from '@/services/restaurant.service';
import type { CartItem } from '../cart/types';
import { redirect } from 'react-router';
import type { CreateOrderType, FormData, FormErrors } from './types';
import { isValidPhone } from '@/utils/helpers';

export const createOrderAction = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as FormData;

    const cart: CartItem = JSON.parse(data.cart);

    const order: CreateOrderType = {
        ...data,
        cart,
        priority: data.priority === 'on',
    };

    const errors: FormErrors = {
        phone: '',
    };

    if (!isValidPhone(order.phone)) {
        errors.phone = 'Phone number is not a valid number.';

        return errors;
    }

    const newOrder = await createOrder(order);

    return redirect(`/order/${newOrder.id}`);
};
