import { Form, useActionData, useNavigation } from 'react-router';
import type { FormErrors } from './types';
import Button from '@/ui/Button.tsx';
import { useAppDispatch, useAppSelector } from '@/redux/hooks.ts';
import { getUser } from '@/redux/slices/userSlice.ts';
import { getCart, getTotalCartPrice } from '@/redux/slices/cartSlice.ts';
import EmptyCart from '@/features/cart/EmptyCart.tsx';
import { formatCurrency } from '@/utils/helpers.ts';
import { useState } from 'react';
import { fetchAddress } from '@/redux/thunks.ts';

const CreateOrder = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    const { username, status, error, position, address } =
        useAppSelector(getUser);
    const isAddressError = status === 'error';
    const isLoadingAddress = status === 'loading';
    const hasAddressPosition = position.latitude && position.longitude;

    const dispatch = useAppDispatch();
    const cart = useAppSelector(getCart);
    const formErrors = useActionData<FormErrors>();
    const [hasPriority, setHasPriority] = useState(false);
    const totalCartPrice = useAppSelector(getTotalCartPrice);

    const priorityPrice = hasPriority ? totalCartPrice * 0.2 : 0;
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
                <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label htmlFor="address" className="sm:basis-40">
                        Address
                    </label>
                    <div className="grow">
                        <input
                            required
                            type="text"
                            id="address"
                            name="address"
                            defaultValue={address}
                            className="input w-full"
                            disabled={isLoadingAddress}
                            autoComplete="street-address"
                        />
                        {isAddressError && (
                            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                                {error}
                            </p>
                        )}
                    </div>
                    {!hasAddressPosition && (
                        <span className="absolute top-[43px] right-[11px] z-50 sm:top-[5px] md:right-[5px]">
                            <Button
                                type="button"
                                variant="small"
                                element="button"
                                disabled={isLoadingAddress}
                                onClick={() => dispatch(fetchAddress())}
                            >
                                {isLoadingAddress
                                    ? 'getting address...'
                                    : 'get address'}
                            </Button>
                        </span>
                    )}
                </div>
                <div className="mb-12 flex items-center gap-5">
                    <input
                        id="priority"
                        name="priority"
                        type="checkbox"
                        value={String(hasPriority)}
                        onChange={(e) => setHasPriority(e.target.checked)}
                        className="h-6 w-6 accent-yellow-400 focus:ring-3 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
                    />
                    <label className="font-medium" htmlFor="priority">
                        Want to yo give your order priority?
                    </label>
                </div>
                <div>
                    <input
                        name="cart"
                        type="hidden"
                        value={JSON.stringify(cart)}
                    />
                    <input
                        type="hidden"
                        name="position"
                        value={
                            hasAddressPosition
                                ? `${position.latitude}, ${position.longitude}`
                                : ''
                        }
                    />
                    <Button
                        type="submit"
                        element="button"
                        variant="primary"
                        disabled={isSubmitting || isLoadingAddress}
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
