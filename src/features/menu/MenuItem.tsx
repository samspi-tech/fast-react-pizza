import { formatCurrency } from '@/utils/helpers';
import type { Pizza } from './types';

type MenuItemProps = {
    pizza: Pizza;
};

const MenuItem = ({ pizza }: MenuItemProps) => {
    const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    const formattedPirce = formatCurrency(unitPrice);
    const pizzaDetails = soldOut ? 'Sold out' : formattedPirce;

    return (
        <li>
            <img src={imageUrl} alt={name} />
            <div>
                <p>{name}</p>
                <p>{ingredients.join(', ')}</p>
                <div>
                    <p>{pizzaDetails}</p>
                </div>
            </div>
        </li>
    );
};

export default MenuItem;
