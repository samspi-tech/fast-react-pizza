import { getMenu } from '@/services/restaurant.service';

export const menuLoader = async () => {
    const menu = await getMenu();

    return menu;
};
