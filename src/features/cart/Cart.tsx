import LinkButton from '@/ui/LinkButton.tsx';
import Button from '@/ui/Button.tsx';
import { fakeCart } from '@/features/cart/dataSource.ts';
import CartItem from '@/features/cart/CartItem.tsx';

const Cart = () => {
    return (
        <div className="px-4 py-3">
            <LinkButton path="/menu">&larr; Back to menu</LinkButton>
            <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>
            <ul className="mt-3 divide-y divide-stone-200 border-b border-stone-200">
                {fakeCart.map((item) => (
                    <CartItem key={item.pizzaId} item={item} />
                ))}
            </ul>
            <div className="mt-6 space-x-2">
                <Button variant="primary" element="link" path="/order/new">
                    Order pizzas
                </Button>
                <Button element="button" variant="secondary">
                    Clear cart
                </Button>
            </div>
        </div>
    );
};

export default Cart;
