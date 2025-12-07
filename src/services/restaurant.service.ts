import type { PizzaMenu } from '@/features/menu/types';
import type { PizzaOrder } from '@/features/order/types';
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
