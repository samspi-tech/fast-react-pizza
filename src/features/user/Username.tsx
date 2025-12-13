import { useAppSelector } from '@/redux/hooks.ts';
import { getUser } from '@/redux/slices/userSlice.ts';

const Username = () => {
    const { username } = useAppSelector(getUser);

    if (!username) return null;

    return (
        <div className="hidden text-sm font-semibold md:block">{username}</div>
    );
};

export default Username;
