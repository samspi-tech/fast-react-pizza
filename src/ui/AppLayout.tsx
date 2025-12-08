import CartOverview from '@/features/cart/CartOverview';
import Header from './Header';
import {Outlet, useNavigation} from 'react-router';
import Loading from './Loading';

const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div className="layout">
            {isLoading && <Loading/>}
            <Header/>
            <main>
                <Outlet/>
            </main>
            <CartOverview/>
        </div>
    );
};

export default AppLayout;
