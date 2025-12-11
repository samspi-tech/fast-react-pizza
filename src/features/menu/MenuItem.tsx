import { formatCurrency } from '@/utils/helpers';
import type { Pizza } from './types';
import Button from '@/ui/Button.tsx';
import { useAppDispatch, useAppSelector } from '@/redux/hooks.ts';
import {
    addItem,
    getCurrentPizzaQuantityById,
} from '@/redux/slices/cartSlice.ts';
import DeleteItem from '@/features/cart/DeleteItem.tsx';
import UpdateItemQuantity from '@/features/cart/UpdateItemQuantity.tsx';

type MenuItemProps = {
    pizza: Pizza;
};

const MenuItem = ({ pizza }: MenuItemProps) => {
    const dispatch = useAppDispatch();

    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
    const formattedPrice = formatCurrency(unitPrice);

    const currentPizzaQuantity = useAppSelector(
        getCurrentPizzaQuantityById(id)
    );
    const isPizzaInCart = currentPizzaQuantity >= 1;

    const handleAddItemToCart = () => {
        const payload = {
            pizzaId: id,
            name,
            unitPrice,
            quantity: 1,
            totalPrice: unitPrice,
        };

        dispatch(addItem(payload));
    };

    return (
        <li className="flex gap-4 py-2">
            <img
                alt={name}
                src={imageUrl}
                className={`h-24 ${soldOut && 'opacity-70 grayscale'}`}
            />
            <div className="flex grow flex-col pt-0.5">
                <p className="font-medium">{name}</p>
                <p className="text-sm text-stone-500 capitalize italic">
                    {ingredients.join(', ')}
                </p>
                <div className="mt-auto flex items-center justify-between text-sm">
                    {soldOut ? (
                        <p className="font-medium text-stone-500 uppercase">
                            Sold out
                        </p>
                    ) : (
                        <p>{formattedPrice}</p>
                    )}
                    {isPizzaInCart && (
                        <div className="flex items-center gap-3 sm:gap-4">
                            <UpdateItemQuantity id={id} />
                            <DeleteItem id={id} />
                        </div>
                    )}
                    {!soldOut && !isPizzaInCart && (
                        <Button
                            variant="small"
                            element="button"
                            onClick={handleAddItemToCart}
                        >
                            Add to cart
                        </Button>
                    )}
                </div>
            </div>
        </li>
    );
};

export default MenuItem;
