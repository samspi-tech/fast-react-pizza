import Button from '@/ui/Button.tsx';
import { useAppDispatch } from '@/redux/hooks.ts';
import { removeItem } from '@/redux/slices/cartSlice.ts';

type DeleteItemProps = {
    id: number;
};

const DeleteItem = ({ id }: DeleteItemProps) => {
    const dispatch = useAppDispatch();

    const handleDeleteItem = () => dispatch(removeItem(id));

    return (
        <Button element="button" variant="small" onClick={handleDeleteItem}>
            Delete
        </Button>
    );
};

export default DeleteItem;
