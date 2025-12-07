import { calcMinutesLeft, formatCurrency, formatDate } from '@/utils/helpers';
import { order } from './dataSource';

const Order = () => {
    const { priority, priorityPrice, orderPrice, estimatedDelivery } = order;

    const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (
        <div>
            <div>
                <h2>Status</h2>
                <div>{priority && <span>Priority</span>}</div>
            </div>
            <div>
                <p>
                    {deliveryIn >= 0
                        ? `Only ${calcMinutesLeft(
                              estimatedDelivery
                          )} minutes left 😃`
                        : 'Order should have arrived'}
                </p>
                <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
            </div>
            <div>
                <p>Price pizza: {formatCurrency(orderPrice)}</p>
                {priority && (
                    <p>Price priority: {formatCurrency(priorityPrice)}</p>
                )}
                <p>
                    To pay on delivery:{' '}
                    {formatCurrency(orderPrice + priorityPrice)}
                </p>
            </div>
        </div>
    );
};

export default Order;
