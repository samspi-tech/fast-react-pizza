import { Link, useNavigate } from 'react-router';
import type { PropsWithChildren } from 'react';

type LinkButtonProps = {
    path: string;
};

const LinkButton = ({ path, children }: PropsWithChildren<LinkButtonProps>) => {
    const navigate = useNavigate();

    const className =
        'text-sm text-blue-500 hover:text-blue-600 hover:underline';

    if (path === '-1') {
        return (
            <button
                role="link"
                className={className}
                onClick={() => navigate(-1)}
            >
                {children}
            </button>
        );
    }

    return (
        <Link to={path} className={className}>
            {children}
        </Link>
    );
};

export default LinkButton;
