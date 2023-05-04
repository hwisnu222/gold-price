import { useQuery } from 'react-query';
import { Card, Typography, Skeleton } from 'antd';

import { GET_GOLD_PRICES } from '../services/gold.service';

const { Title } = Typography;

export default function GoldPrice() {
    const { data, isLoading } = useQuery('users', GET_GOLD_PRICES);
    const price = data?.data;

    return (
        <>
            <Title level={4} className="title">
                Gold Price
            </Title>
            <div className="gold-element">
                <Card
                    title="Gold"
                    bordered={false}
                    style={{
                        width: 300,
                    }}
                >
                    {isLoading ? <Skeleton /> : <p>{price?.gold || 0}</p>}
                </Card>
                <Card
                    title="Silver"
                    bordered={false}
                    style={{
                        width: 300,
                    }}
                >
                    {isLoading ? <Skeleton /> : <p>{price?.silver || 0}</p>}
                </Card>
            </div>
        </>
    );
}

// {
//   "gold": 1740.93,
//   "silver": 21.8218
//   }
