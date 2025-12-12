import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPosition } from '@/utils/helpers.ts';
import { getAddress } from '@/services/geocoding.service.ts';

export const fetchAddress = createAsyncThunk('user/fetchAddress', async () => {
    const positionObj = await getPosition();

    const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
    };

    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    return {
        position,
        address,
    };
});
