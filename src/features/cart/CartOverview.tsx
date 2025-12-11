import { Link } from 'react-router';
import { useAppSelector } from '@/redux/hooks.ts';
import { formatCurrency } from '@/utils/helpers.ts';
import {
    getTotalCartQuantity,
    getTotalCartPrice,
} from '@/redux/slices/cartSlice';

const CartOverview = () => {
    const totalCartPrice = useAppSelector(getTotalCartPrice);
    const totalCartQuantity = useAppSelector(getTotalCartQuantity);

    return (
        <footer className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
            <p className="space-x-4 text-stone-300 sm:space-x-6">
                <span>{totalCartQuantity} pizzas</span>
                <span>{formatCurrency(totalCartPrice)}</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </footer>
    );
};

export default CartOverview;
