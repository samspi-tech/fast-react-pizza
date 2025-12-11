import Button from '@/ui/Button.tsx';
import { useAppDispatch, useAppSelector } from '@/redux/hooks.ts';
import {
    decreaseItemQuantity,
    getCurrentPizzaQuantityById,
    increaseItemQuantity,
} from '@/redux/slices/cartSlice.ts';

type UpdateItemQuantityProps = {
    id: number;
};

const UpdateItemQuantity = ({ id }: UpdateItemQuantityProps) => {
    const dispatch = useAppDispatch();
    const currentPizzaQuantity = useAppSelector(
        getCurrentPizzaQuantityById(id)
    );

    const handleIncreaseItemQuantity = () => dispatch(increaseItemQuantity(id));
    const handleDecreaseItemQuantity = () => dispatch(decreaseItemQuantity(id));

    return (
        <div className="flex items-center gap-2 md:gap-3">
            <Button
                variant="round"
                element="button"
                onClick={handleIncreaseItemQuantity}
            >
                +
            </Button>
            <span className="text-sm font-medium">{currentPizzaQuantity}</span>
            <Button
                variant="round"
                element="button"
                onClick={handleDecreaseItemQuantity}
            >
                -
            </Button>
        </div>
    );
};

export default UpdateItemQuantity;
