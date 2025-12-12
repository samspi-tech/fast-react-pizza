import type { UserGeoPosition } from '@/services/types.ts';

export const getAddress = async ({ latitude, longitude }: UserGeoPosition) => {
    const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );

    if (!res.ok) throw Error('Failed getting address');

    return await res.json();
};
