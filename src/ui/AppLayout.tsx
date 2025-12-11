import CartOverview from '@/features/cart/CartOverview';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router';
import Loading from './Loading';
import { useAppSelector } from '@/redux/hooks.ts';
import { Activity } from 'react';
import { getCart } from '@/redux/slices/cartSlice.ts';
import { getUsername } from '@/redux/slices/userSlice.ts';

const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    const cart = useAppSelector(getCart);
    const username = useAppSelector(getUsername);

    const isCartVisible = username && cart.length > 0;

    return (
        <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
            {isLoading && <Loading />}
            <Header />
            <div className="overflow-scroll">
                <main className="mx-auto max-w-3xl">
                    <Outlet />
                </main>
            </div>
            <Activity mode={isCartVisible ? 'visible' : 'hidden'}>
                <CartOverview />
            </Activity>
        </div>
    );
};

export default AppLayout;
