import { Form, useActionData, useNavigation } from 'react-router';
import type { FormErrors } from './types';
import Button from '@/ui/Button.tsx';
import { useAppSelector } from '@/redux/hooks.ts';
import { getUsername } from '@/redux/slices/userSlice.ts';
import { getCart, getTotalCartPrice } from '@/redux/slices/cartSlice.ts';
import EmptyCart from '@/features/cart/EmptyCart.tsx';
import { formatCurrency } from '@/utils/helpers.ts';
import { useState } from 'react';

const CreateOrder = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    const cart = useAppSelector(getCart);
    const username = useAppSelector(getUsername);
    const formErrors = useActionData<FormErrors>();
    const [isChecked, setIsChecked] = useState(false);
    const totalCartPrice = useAppSelector(getTotalCartPrice);

    const handleCheckbox = () => setIsChecked((prevState) => !prevState);

    const priorityPrice = isChecked ? totalCartPrice * 0.2 : 0;
    const totalPrice = totalCartPrice + priorityPrice;

    if (!cart.length) return <EmptyCart />;

    return (
        <div className="px-4 py-6">
            <h2 className="mb-8 text-xl font-semibold">
                Ready to order? Let's go!
            </h2>
            <Form method="post">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label htmlFor="customer" className="sm:basis-40">
                        First Name
                    </label>
                    <input
                        required
                        type="text"
                        id="customer"
                        name="customer"
                        className="input grow"
                        defaultValue={username}
                    />
                </div>
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label htmlFor="phone" className="sm:basis-40">
                        Phone number
                    </label>
                    <div className="grow">
                        <input
                            required
                            type="tel"
                            id="phone"
                            name="phone"
                            autoComplete="tel"
                            className="input w-full"
                        />
                        {formErrors?.phone && (
                            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                                {formErrors.phone}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label htmlFor="address" className="sm:basis-40">
                        Address
                    </label>
                    <div className="grow">
                        <input
                            required
                            type="text"
                            id="address"
                            name="address"
                            className="input w-full"
                            autoComplete="street-address"
                        />
                    </div>
                </div>
                <div className="mb-12 flex items-center gap-5">
                    <input
                        id="priority"
                        name="priority"
                        type="checkbox"
                        checked={isChecked}
                        onClick={handleCheckbox}
                        className="h-6 w-6 accent-yellow-400 focus:ring-3 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
                    />
                    <label className="font-medium" htmlFor="priority">
                        Want to yo give your order priority?
                    </label>
                </div>
                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <Button
                        type="submit"
                        element="button"
                        variant="primary"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? 'Placing order...'
                            : `Order now for ${formatCurrency(totalPrice)}`}
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default CreateOrder;
