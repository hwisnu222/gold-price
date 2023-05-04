import { API_BASE } from '../configs/api';

export const GET_USER = async () => {
    return await API_BASE.get('/users');
};

export const DELETE_USER = async (idUser) => {
    return await API_BASE.delete(`/users/${idUser}`);
};
