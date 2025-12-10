import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

const SearchOrder = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query) return;

        navigate(`/order/${query}`);
        setQuery('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="query"
                value={query}
                placeholder="Search order #"
                onChange={(e) => setQuery(e.target.value)}
                className="w-32 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring-3 focus:ring-yellow-400 focus:outline-none sm:w-64 sm:focus:w-72"
            />
        </form>
    );
};

export default SearchOrder;
