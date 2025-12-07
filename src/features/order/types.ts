import type { CartItem } from '../cart/types';

export type PizzaOrder = {
    cart: CartItem[];
    customer: string;
    estimatedDelivery?: string;
    id?: string;
    orderPrice?: number;
    priority: boolean;
    priorityPrice?: number;
    status?: string;
};

export type FormData = {
    username: string;
    phone: string;
    address: string;
    priority?: string;
    cart: string;
};

export type CreateOrderType = {
    username: string;
    phone: string;
    address: string;
    priority: boolean;
    cart: CartItem;
};
