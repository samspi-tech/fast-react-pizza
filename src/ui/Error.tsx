import { getErrorMessage } from '@/utils/helpers';
import { useNavigate, useRouteError } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    const errorMessage = getErrorMessage(error);

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{errorMessage}</p>
            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    );
};

export default Error;
