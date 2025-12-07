import { useState } from 'react';
import { useNavigate } from 'react-router';

const SearchOrder = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
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
            />
        </form>
    );
};

export default SearchOrder;
