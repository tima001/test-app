import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const Auth = ({ onAuth }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (values) => {
        setLoading(true);
        // Имитация ответа бэка
        setTimeout(() => {
            setLoading(false);
            if (values.username === 'admin' && values.password === 'admin') {
                localStorage.setItem('token', 'fake-jwt-token');
                onAuth(true);
                message.success('Успешная авторизация');
            } else {
                message.error('Неверные учетные данные');
            }
        }, 1000);
    };

    const formStyle = {
        padding: '48px 24px 48px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '24px',
        maxWidth: '380px',  // Ограничить максимальную ширину формы
        width: '100%',  // Установить ширину формы на 100%
    };

    const inputStyle = {
        width: '100%',  // Установить ширину инпутов на 100%
    };


    return (
        <Form onFinish={handleSubmit} style={formStyle}>
            <div style={{textAlign: 'center', fontSize: '24px', fontWeight: 500, marginBottom: '24px'}}>
                Логин
            </div>
            <Form.Item name="username" rules={[{ required: true, message: 'Введите имя пользователя!' }]}>
                <Input placeholder="Имя пользователя" style={inputStyle} />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Введите пароль!' }]}>
                <Input.Password placeholder="Пароль" style={inputStyle} />
            </Form.Item>
            <Form.Item>
                <Button block type="primary" htmlType="submit" loading={loading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Auth;
