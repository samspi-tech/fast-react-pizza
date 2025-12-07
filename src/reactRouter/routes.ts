import Cart from '@/features/cart/Cart';
import Menu from '@/features/menu/Menu';
import { menuLoader } from '@/features/menu/menuLoader';
import CreateOrder from '@/features/order/CreateOrder';
import Order from '@/features/order/Order';
import { orderLoader } from '@/features/order/orderLoader';
import Applayout from '@/ui/Applayout';
import Error from '@/ui/Error';
import Home from '@/ui/Home';

const routes = [
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/menu',
        loader: menuLoader,
        ErrorBoundary: Error,
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
        loader: orderLoader,
        ErrorBoundary: Error,
        Component: Order,
    },
];

export const appLayoutRoute = [
    {
        Component: Applayout,
        ErrorBoundary: Error,
        children: routes,
    },
];
