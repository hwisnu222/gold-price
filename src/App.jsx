import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import PrivateRouter from './components/PrivateRouter';
import Auth from './pages/Auth';
import GoldPrice from './pages/GoldPrice';
import User from './pages/User';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth />,
    },
    {
        path: '/dashboard',
        element: <PrivateRouter />,
        children: [
            {
                path: 'user/',
                element: <User />,
            },
            {
                path: 'gold-price/',
                element: <GoldPrice />,
            },
        ],
    },
]);

const client = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={client}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;
