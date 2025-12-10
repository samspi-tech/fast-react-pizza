import { formatCurrency } from '@/utils/helpers.ts';
import type { CartItemTypes } from '@/features/cart/types.ts';
import Button from '@/ui/Button.tsx';

type CartItemsProps = {
    item: CartItemTypes;
};

const CartItem = ({ item }: CartItemsProps) => {
    const { name, quantity, totalPrice } = item;

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <Button element="button" variant="small">
                    Delete
                </Button>
            </div>
        </li>
    );
};

export default CartItem;
