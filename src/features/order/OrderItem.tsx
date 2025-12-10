import { formatCurrency } from '@/utils/helpers.ts';
import type { CartItemTypes } from '@/features/cart/types.ts';

type OrderItemProps = {
    item: CartItemTypes;
};

const OrderItem = ({ item }: OrderItemProps) => {
    const { quantity, name, totalPrice } = item;

    return (
        <li className="py-3">
            <div className="flex items-center justify-between gap-4 text-sm">
                <p>
                    <span className="font-bold">{quantity}&times;</span> {name}
                </p>
                <p className="font-bold">{formatCurrency(totalPrice)}</p>
            </div>
        </li>
    );
};

export default OrderItem;
