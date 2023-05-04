import { Navigate, Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

export default function PrivateRouter() {
    const token = localStorage.getItem('token');
    console.log(token);

    if (token) {
        return (
            <MainLayout>
                <Outlet />
            </MainLayout>
        );
    } else {
        return <Navigate to="/" replace />;
    }
}
