import { Form, useActionData, useNavigation } from 'react-router';
import { fakeCart as cart } from '../cart/dataSource';
import type { FormErrors } from './types';
import Button from '@/ui/Button.tsx';

const CreateOrder = () => {
    const navigation = useNavigation();
    const formErrors = useActionData<FormErrors>();

    const isSubmitting = navigation.state === 'submitting';

    return (
        <div className="px-4 py-6">
            <h2 className="mb-8 text-xl font-semibold">
                Ready to order? Let's go!
            </h2>
            <Form method="post">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">First Name</label>
                    <input
                        required
                        type="text"
                        name="customer"
                        className="input grow"
                    />
                </div>
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Phone number</label>
                    <div className="grow">
                        <input
                            required
                            type="tel"
                            name="phone"
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
                    <label className="sm:basis-40">Address</label>
                    <div className="grow">
                        <input
                            required
                            type="text"
                            name="address"
                            className="input w-full"
                        />
                    </div>
                </div>
                <div className="mb-12 flex items-center gap-5">
                    <input
                        id="priority"
                        name="priority"
                        type="checkbox"
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
                        {isSubmitting ? 'Placing order...' : 'Order now'}
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default CreateOrder;
