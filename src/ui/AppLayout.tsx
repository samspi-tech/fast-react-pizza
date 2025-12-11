import CartOverview from '@/features/cart/CartOverview';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router';
import Loading from './Loading';
import { useAppSelector } from '@/redux/hooks.ts';
import { Activity } from 'react';

const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    const { cart } = useAppSelector((state) => state.cart);
    const { username } = useAppSelector((state) => state.user);

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
