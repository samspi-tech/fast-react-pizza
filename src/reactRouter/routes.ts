import Cart from '@/features/cart/Cart';
import Menu from '@/features/menu/Menu';
import CreateOrder from '@/features/order/CreateOrder';
import Order from '@/features/order/Order';
import Applayout from '@/ui/Applayout';
import Home from '@/ui/Home';

const routes = [
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/menu',
        Component: Menu,
    },
    {
        path: '/cart',
        Component: Cart,
    },
    {
        path: '/order/new',
        Component: CreateOrder,
    },
    {
        path: '/order/:orderId',
        Component: Order,
    },
];

export const appLayoutRoute = [
    {
        Component: Applayout,
        children: routes,
    },
];
