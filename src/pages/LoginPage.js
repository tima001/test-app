import React from 'react';
import Auth from '../components/Auth';
import { Flex} from "antd";

const LoginPage = ({onAuth}) => (
    <Flex
        justify={'center'}
        align={'center'}
        style={{
            height: '100vh',
            background: `url(/images/login_background.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Auth onAuth={onAuth}/>
    </Flex>
);

export default LoginPage;
