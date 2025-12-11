import type { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router';

type ButtonVariant = 'primary' | 'secondary' | 'small' | 'round';

interface ButtonProps extends ComponentProps<'button'> {
    element: 'button';
    variant: ButtonVariant;
}

type LinkProps = {
    path: string;
    element: 'link';
    children: ReactNode;
    variant: ButtonVariant;
};

const Button = (props: ButtonProps | LinkProps) => {
    const { element, variant } = props;

    const baseStyle =
        'focus:inline-block text-sm cursor-pointer rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring-3 focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed';

    const styles = {
        primary: baseStyle + ' px-4 py-3 md:px-6 md:py-4',
        small: baseStyle + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        round: baseStyle + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
        secondary:
            'focus:inline-block text-sm border-2 border-stone-300 cursor-pointer rounded-full font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:ring-3 focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-3.5 py-2.5 md:px-5.5 md:py-3.5',
    };

    if (element === 'link') {
        return (
            <Link role="button" to={props.path} className={styles[variant]}>
                {props.children}
            </Link>
        );
    }

    return <button {...props} className={styles[variant]} />;
};

export default Button;
