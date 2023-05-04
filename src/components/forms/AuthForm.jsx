import { Button, Form, Input } from 'antd';
import AlertUser from '../Alerts/AlertUser';

export default function AuthForm({
    isSuccess,
    isError,
    isLoading,
    isLogin = true,
    messages,
    onFinish,
    form,
}) {
    return (
        <div>
            <AlertUser
                isSuccess={isSuccess}
                isError={isError}
                messages={messages}
            />
            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                form={form}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                {!form && (
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isLoading}
                        >
                            {isLogin ? 'Login' : 'Register'}
                        </Button>
                    </Form.Item>
                )}
            </Form>
        </div>
    );
}
