import type { PizzaMenu } from '@/features/menu/types';
import type { CreateOrderType, PizzaOrder } from '@/features/order/types';
import { PIZZA_BASE_URL } from '@/utils/constants';

export const getMenu = async (): Promise<PizzaMenu> => {
    const res = await fetch(`${PIZZA_BASE_URL}/menu`);

    if (!res.ok) throw Error('Failed getting menu');

    const { data } = (await res.json()) as { data: PizzaMenu };
    return data;
};

export const getOrder = async (id?: string): Promise<PizzaOrder> => {
    const res = await fetch(`${PIZZA_BASE_URL}/order/${id}`);

    if (!res.ok) throw Error(`Couldn't find order #${id}`);

    const { data } = (await res.json()) as { data: PizzaOrder };
    return data;
};

export const createOrder = async (
    newOrder: CreateOrderType
): Promise<PizzaOrder> => {
    try {
        const res = await fetch(`${PIZZA_BASE_URL}/order`, {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) throw Error();

        const { data } = (await res.json()) as { data: PizzaOrder };
        return data;
    } catch {
        throw Error('Failed creating your order');
    }
};

export const updateOrder = async (
    id: string,
    updateObj: { priority: boolean }
) => {
    try {
        const res = await fetch(`${PIZZA_BASE_URL}/order/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updateObj),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) throw Error();
    } catch (err) {
        throw Error('Failed updating your order');
    }
};
