import { type FormEvent, useState } from 'react';
import Button from '@/ui/Button.tsx';

const CreateUser = () => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username) return;
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm text-stone-600 md:text-base">
                👋 Welcome! Please start by telling us your name:
            </p>
            <input
                type="text"
                value={username}
                placeholder="Your full name"
                onChange={(e) => setUsername(e.target.value)}
                className="input mb-8 w-72"
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
