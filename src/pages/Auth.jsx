import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { LOGIN, REGISTER } from '../services/auth.service';
import AuthForm from '../components/forms/AuthForm';
import { Button, Modal, Form } from 'antd';

export default function Auth() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [typeAuth, setTypeAuth] = React.useState('login');
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const isLogin = typeAuth === 'login';

    const { mutate, isSuccess, isLoading, isError, error } = useMutation(
        isLogin ? LOGIN : REGISTER,
        {
            onSuccess: (data) => {
                if (isLogin) {
                    navigate('/dashboard/user');

                    const token = data.data.token;
                    localStorage.setItem('token', token);
                }

                setTimeout(() => {
                    handleOpenModal();
                }, 3000);
            },
        }
    );

    const submitForm = (values) => {
        mutate(values);
    };

    const handleSubmit = () => {
        form.submit();
    };

    const handleOpenModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const setAuth = (event) => {
        setTypeAuth(event.currentTarget.name);
        handleOpenModal();
    };

    return (
        <div className="auth-element">
            <div className="auth-wrap">
                <Button
                    onClick={setAuth}
                    name="login"
                    type="primary"
                    style={{ marginRight: '1rem' }}
                >
                    Login
                </Button>
                <Button onClick={setAuth} name="register">
                    Register
                </Button>
            </div>
            <p>Demo:</p>
            <ul>
                <li>email: eve.holt@reqres.in</li>
                <li>Password: pistol</li>
            </ul>

            <Modal
                title={isLogin ? 'Login' : 'Register'}
                open={isModalOpen}
                onOk={handleSubmit}
                onCancel={handleOpenModal}
            >
                <AuthForm
                    isLogin={typeAuth}
                    isSuccess={isSuccess}
                    isError={isError}
                    isLoading={isLoading}
                    messages={{
                        success: 'User is registered',
                        error: error?.response.data.error,
                    }}
                    form={form}
                    onFinish={submitForm}
                />
            </Modal>
        </div>
    );
}
