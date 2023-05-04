import { Alert } from 'antd';

export default function AlertUser({
    isSuccess = false,
    isError = false,
    messages,
}) {
    return (
        <div>
            {isSuccess && <Alert message={messages?.success} type="success" />}

            {isError && <Alert message={messages?.error} type="error" />}
        </div>
    );
}
