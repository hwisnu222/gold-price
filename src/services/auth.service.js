import { API_BASE } from '../configs/api';

export const LOGIN = (form) => {
    console.log({ form });
    return API_BASE.post('/login', form);
};

export const REGISTER = (form) => {
    return API_BASE.post('/register', form);
};
