import { Form } from 'react-router';
import { fakeCart } from '../cart/dataSource';

const CreateOrder = () => {
    const cart = fakeCart;

    return (
        <div>
            <h2>Ready to order? Let's go!</h2>
            <Form method="post">
                <div>
                    <label>First Name</label>
                    <input type="text" name="customer" required />
                </div>
                <div>
                    <label>Phone number</label>
                    <div>
                        <input type="tel" name="phone" required />
                    </div>
                </div>
                <div>
                    <label>Address</label>
                    <div>
                        <input type="text" name="address" required />
                    </div>
                </div>
                <div>
                    <input type="checkbox" name="priority" id="priority" />
                    <label htmlFor="priority">
                        Want to yo give your order priority?
                    </label>
                </div>
                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <button type="submit">Order now</button>
                </div>
            </Form>
        </div>
    );
};

export default CreateOrder;
