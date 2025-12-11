import { getErrorMessage } from '@/utils/helpers';
import { useRouteError } from 'react-router';
import LinkButton from '@/ui/LinkButton.tsx';

const Error = () => {
    const error = useRouteError();
    const errorMessage = getErrorMessage(error);

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{errorMessage}</p>
            <LinkButton path="-1">&larr; Go back</LinkButton>
        </div>
    );
};

export default Error;
