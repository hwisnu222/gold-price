import React from 'react';
import { useMutation, useQuery } from 'react-query';

import { DELETE_USER, GET_USER } from '../services/user.service';
import { REGISTER } from '../services/auth.service';
import AuthForm from '../components/forms/AuthForm';
import {
    Space,
    Table,
    Avatar,
    Button,
    Popconfirm,
    Modal,
    Form,
    message,
} from 'antd';

const ActionTable = ({ id }) => {
    const [messageApi, contextHolder] = message.useMessage();

    const { mutate, isLoading } = useMutation(DELETE_USER, {
        onSuccess: () => {
            messageApi.success('User is deleted!');
        },
    });

    const deleteUser = () => {
        mutate(id);
    };

    return (
        <Space size="middle">
            {contextHolder}
            <Popconfirm
                title="Delete the user"
                description="Are you sure to delete this user?"
                onOk={deleteUser}
                onConfirm={deleteUser}
                okText="Yes"
                cancelText="No"
            >
                <Button type="link" loading={isLoading}>
                    Delete
                </Button>
            </Popconfirm>
        </Space>
    );
};

const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (url) => <Avatar size={64} src={url} />,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
    },
    {
        title: 'Last Name',
        key: 'last_name',
        dataIndex: 'last_name',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => <ActionTable id={record.id} />,
    },
];

export default function User() {
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const { mutate, isSuccess, isLoading, isError, error } = useMutation(
        REGISTER,
        {
            onSuccess: () => {
                setTimeout(() => {
                    handleOpenModal();
                }, 3000);
            },
        }
    );
    const getUsers = useQuery('users', GET_USER);
    const users = getUsers.data?.data.data;

    const addUser = (values) => {
        mutate(values);
    };

    const submitForm = () => {
        form.submit();
    };

    const handleOpenModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <>
            <Button
                type="primary"
                onClick={handleOpenModal}
                style={{ margin: '1rem 0' }}
            >
                Add User
            </Button>
            <Table
                columns={columns}
                dataSource={users}
                loading={getUsers.loading}
            />

            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={submitForm}
                onCancel={handleOpenModal}
            >
                <AuthForm
                    isLogin={false}
                    isSuccess={isSuccess}
                    isError={isError}
                    isLoading={isLoading}
                    messages={{
                        success: 'User is registered',
                        error: error?.response.data.error,
                    }}
                    form={form}
                    onFinish={addUser}
                />
                <p>Email demo: eve.holt@reqres.in</p>
            </Modal>
        </>
    );
}
