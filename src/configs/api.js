import axios from 'axios';

export const API_BASE = axios.create({
    baseURL: import.meta.env.VITE_API,
});

export const API_GOLD_PRICE = axios.create({
    baseURL: import.meta.env.VITE_API_GOLD_PRICE,
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPID_HOST,
    },
});
