import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const menus = [
    {
        key: 'users',
        label: 'Users',
    },
    {
        key: 'gold-price',
        label: 'Gold Price',
    },
    {
        key: 'logout',
        label: 'Logout',
    },
];

export default function MainLayout({ children }) {
    const navigate = useNavigate();

    const selectMenu = (e) => {
        switch (e.key) {
            case 'users':
                navigate('/dashboard/user');
                break;
            case 'gold-price':
                navigate('/dashboard/gold-price');
                break;
            case 'logout':
                localStorage.removeItem('token');
                navigate('/');
                break;
            default:
                navigate('/dashboard/gold-price');
                break;
        }
    };
    return (
        <Layout className="layout">
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['users']}
                    items={menus}
                    onClick={selectMenu}
                />
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <div>{children}</div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Padepokan Sembilan Tujuh @ 2023
            </Footer>
        </Layout>
    );
}
