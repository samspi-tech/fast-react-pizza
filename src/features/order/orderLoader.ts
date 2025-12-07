import { getOrder } from '@/services/restaurant.service';

type Params = {
    params: {
        orderId: string;
    };
};

export const orderLoader = async ({ params }: Params) => {
    const order = await getOrder(params.orderId);

    return order;
};
