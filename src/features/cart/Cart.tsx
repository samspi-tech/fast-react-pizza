import LinkButton from '@/ui/LinkButton.tsx';
import Button from '@/ui/Button.tsx';
import CartItem from '@/features/cart/CartItem.tsx';
import { useAppDispatch, useAppSelector } from '@/redux/hooks.ts';
import { clearCart, getCart } from '@/redux/slices/cartSlice.ts';
import { getUsername } from '@/redux/slices/userSlice.ts';
import EmptyCart from '@/features/cart/EmptyCart.tsx';

const Cart = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(getCart);
    const username = useAppSelector(getUsername);

    if (!cart.length) return <EmptyCart />;

    const handleClearCart = () => dispatch(clearCart());

    return (
        <div className="px-4 py-3">
            <LinkButton path="/menu">&larr; Back to menu</LinkButton>
            <h2 className="mt-7 text-xl font-semibold">
                Your cart, {username}.
            </h2>
            <ul className="mt-3 divide-y divide-stone-200 border-b border-stone-200">
                {cart.map((item) => (
                    <CartItem key={item.pizzaId} item={item} />
                ))}
            </ul>
            <div className="mt-6 space-x-2">
                <Button variant="primary" element="link" path="/order/new">
                    Order pizzas
                </Button>
                <Button
                    element="button"
                    variant="secondary"
                    onClick={handleClearCart}
                >
                    Clear cart
                </Button>
            </div>
        </div>
    );
};

export default Cart;
