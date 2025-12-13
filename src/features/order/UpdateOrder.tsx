import Button from '@/ui/Button.tsx';
import { useFetcher } from 'react-router';

const UpdateOrder = () => {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method="PATCH" className="text-right">
            <Button type="submit" element="button" variant="primary">
                Make priority
            </Button>
        </fetcher.Form>
    );
};

export default UpdateOrder;
