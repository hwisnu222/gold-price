import { API_GOLD_PRICE } from '../configs/api';

export const GET_GOLD_PRICES = () => {
    return API_GOLD_PRICE.get('/get_metal_prices');
};
