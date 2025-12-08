import SearchOrder from '@/features/order/SearchOrder';
import { Link } from 'react-router';

const Header = () => {
    return (
        <header className="bg-yellow-500">
            <Link to="/">Fast React Pizza Co.</Link>
            <SearchOrder />
        </header>
    );
};

export default Header;
