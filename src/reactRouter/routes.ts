import { createBrowserRouter } from 'react-router';
import Applayout from '@/ui/Applayout';
import Error from '@/ui/Error';
import Home from '@/ui/Home';
import Menu from '@/features/menu/Menu';
import { menuLoader } from '@/features/menu/menuLoader';
import Cart from '@/features/cart/Cart';
import CreateOrder from '@/features/order/CreateOrder';
import Order from '@/features/order/Order';
import { orderLoader } from '@/features/order/orderLoader';
import { createOrderAction } from '@/features/order/orderAction';

export const router = createBrowserRouter([
    {
        Component: Applayout,
        ErrorBoundary: Error,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/menu',
                Component: Menu,
                loader: menuLoader,
                ErrorBoundary: Error,
            },
            {
                path: '/cart',
                Component: Cart,
            },
            {
                path: '/order/new',
                Component: CreateOrder,
                action: createOrderAction,
            },
            {
                path: '/order/:orderId',
                Component: Order,
                loader: orderLoader,
                ErrorBoundary: Error,
            },
        ],
    },
]);
