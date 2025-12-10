import { getMenu } from '@/services/restaurant.service';

export const menuLoader = async () => {
    return await getMenu();
};
