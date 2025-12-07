import { getOrder } from '@/services/restaurant.service';
import type { Params } from 'react-router';

export const orderLoader = async ({ params }: { params: Params<string> }) => {
    const order = await getOrder(params.orderId);

    return order;
};
