import { getOrder } from '@/services/restaurant.service';
import type { Params } from 'react-router';

export const orderLoader = async ({ params }: { params: Params<string> }) => {
    return await getOrder(params.orderId);
};
