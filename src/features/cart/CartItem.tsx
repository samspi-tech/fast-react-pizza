import { formatCurrency } from '@/utils/helpers.ts';
import type { CartItemTypes } from '@/features/cart/types.ts';
import Button from '@/ui/Button.tsx';
import { useAppDispatch } from '@/redux/hooks.ts';
import { decreaseItemQuantity, removeItem } from '@/redux/slices/cartSlice.ts';

type CartItemsProps = {
    item: CartItemTypes;
};

const CartItem = ({ item }: CartItemsProps) => {
    const dispatch = useAppDispatch();
    const { pizzaId, name, quantity, totalPrice } = item;

    const handleDeleteItem = () => {
        const isSingleItem = quantity === 1;

        if (isSingleItem) {
            dispatch(removeItem(pizzaId!));
        } else {
            dispatch(decreaseItemQuantity(pizzaId!));
        }
    };

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <Button
                    variant="small"
                    element="button"
                    onClick={handleDeleteItem}
                >
                    Delete
                </Button>
            </div>
        </li>
    );
};

export default CartItem;
