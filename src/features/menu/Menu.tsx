import { useLoaderData } from 'react-router';
import type { PizzaMenu } from './types';
import MenuItem from './MenuItem';

const Menu = () => {
    const menu = useLoaderData<PizzaMenu>();

    return (
        <ul className="divide-y divide-stone-200 px-2">
            {menu?.map((pizza) => (
                <MenuItem key={pizza.id} pizza={pizza} />
            ))}
        </ul>
    );
};

export default Menu;
