import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'B', uv: 300, pv: 1398, amt: 2210 },
    { name: 'C', uv: 200, pv: 9800, amt: 2290 },
    { name: 'D', uv: 278, pv: 3908, amt: 2000 },
    { name: 'E', uv: 189, pv: 4800, amt: 2181 },
    { name: 'F', uv: 239, pv: 3800, amt: 2500 },
    { name: 'G', uv: 349, pv: 4300, amt: 2100 },
];

const ChartCard = ({ title, dataKey, stroke }) => (
    <Card title={title} style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <Line type="monotone" dataKey={dataKey} stroke={stroke} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    </Card>
);

const formatter = (value) => (
    <CountUp end={value} separator="," />
);

const HomePage = () => (
    <div style={{ padding: '24px' }}>
        <Row gutter={[16, 16]}>
            <Col span={8}>
                <Card>
                    <Statistic title="Значение 1" value={112893} formatter={formatter} />
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                    <Statistic title="Значение 2" value={93423} precision={2} formatter={formatter} />
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                    <Statistic title="Значение 3" value={893} precision={3} formatter={formatter} />
                </Card>
            </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
            <Col span={8}>
                <ChartCard title="График 1" dataKey="uv" stroke="#8884d8" />
            </Col>
            <Col span={8}>
                <ChartCard title="График 2" dataKey="pv" stroke="#82ca9d" />
            </Col>
            <Col span={8}>
                <ChartCard title="График 3" dataKey="amt" stroke="#ffc658" />
            </Col>
        </Row>
    </div>
);

export default HomePage;
