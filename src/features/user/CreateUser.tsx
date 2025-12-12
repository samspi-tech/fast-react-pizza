import { type FormEvent, useState } from 'react';
import Button from '@/ui/Button.tsx';
import { useAppDispatch } from '@/redux/hooks.ts';
import { updateName } from '@/redux/slices/userSlice.ts';
import { useNavigate } from 'react-router';

const CreateUser = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [username, setUsername] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username) return;

        dispatch(updateName(username));
        setUsername('');
        navigate('/menu');
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm text-stone-600 md:text-base">
                👋 Welcome! Please start by telling us your name:
            </p>
            <input
                type="text"
                name="username"
                value={username}
                autoComplete="username"
                className="input mb-8 w-72"
                placeholder="Your full name"
                onChange={(e) => setUsername(e.target.value)}
            />
            {username !== '' && (
                <div>
                    <Button variant="primary" element="button" type="submit">
                        Start ordering
                    </Button>
                </div>
            )}
        </form>
    );
};

export default CreateUser;
