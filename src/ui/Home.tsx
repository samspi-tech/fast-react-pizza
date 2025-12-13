import CreateUser from '@/features/user/CreateUser.tsx';
import { useAppSelector } from '@/redux/hooks.ts';
import Button from '@/ui/Button.tsx';
import { getUser } from '@/redux/slices/userSlice.ts';

const Home = () => {
    const { username } = useAppSelector(getUser);

    return (
        <div className="my-10 px-4 text-center sm:my-16">
            <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
                The best pizza.
                <br />
                <span className="text-yellow-500">
                    Straight out of the oven, straight to you.
                </span>
            </h1>
            {!username ? (
                <CreateUser />
            ) : (
                <Button path="/menu" element="link" variant="primary">
                    Continue ordering
                </Button>
            )}
        </div>
    );
};

export default Home;
