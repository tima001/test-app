import React from 'react';
import { Layout, Menu, Button } from 'antd';
import {Link, useNavigate} from 'react-router-dom';

const { Header, Content } = Layout;

const MainLayout = ({ children, onSignOut }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        onSignOut(false);
        navigate('/login');
    };

    return (
        <Layout style={{height: '100vh'}}>
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">
                        <Link to="/">Главная</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Button type="primary" onClick={handleSignOut}>
                            Выйти
                        </Button>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: '20px' }}>
                {children}
            </Content>
        </Layout>
    );
};

export default MainLayout;
