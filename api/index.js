import axios from 'axios';
import { RAPIDAPI_KEY } from '@env';

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    const options = {
        method: 'GET',
        url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        params: {
            bl_latitude: bl_lat ? bl_lat : '11.847676',
            tr_latitude: tr_lat ? tr_lat : '12.838442',
            bl_longitude: bl_lng ? bl_lng : '109.095887',
            tr_longitude: tr_lng ? tr_lng : '109.149359',
            limit: '30',
            currency: 'USD',
            lunit: 'km',
            lang: 'en_US'
        },
        headers: {
            'x-rapidapi-key': RAPIDAPI_KEY,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);

        return response.data.data;
    } catch (error) {
        console.error("API isteği hatası:", error);
        return null;
    }
};