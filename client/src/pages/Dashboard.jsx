import React from 'react';
import {Container, Row, Col, Card, Button, ProgressBar, } from 'react-bootstrap'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,ResponsiveContainer
  } from "recharts";
  
  const data = [
    {
      name: "1",
      pv: 2400,
      amt: 2400
    },
    {
      name: "2",
      pv: 1398,
      amt: 2210
    },
    {
      name: "3",
      pv: 10800,
      amt: 2290
    },
    {
      name: "4",
      pv: 3908,
      amt: 2000
    },
    {
      name: "5",
      pv: 4800,
      amt: 2181
    },
    {
      name: "6",
      pv: 3800,
      amt: 2500
    },
    {
      name: "7",
      pv: 4300,
      amt: 2100
    },
    {
      name: "8",
      pv: 4300,
      amt: 2100
    },
    {
      name: "9",
      pv: 4300,
      amt: 2100
    },
    {
      name: "10",
      pv: 4300,
      amt: 2100
    },
    {
      name: "11",
      pv: 4300,
      amt: 2100
    },
    {
      name: "12",
      pv: 4300,
      amt: 2100
    },
    {
      name: "13",
      pv: 4300,
      amt: 2100
    },
    {
      name: "14",
      pv: 4300,
      amt: 2100
    },
    {
      name: "15",
      pv: 4300,
      amt: 2100
    },
    {
      name: "16",
      pv: 4300,
      amt: 2100
    },
    {
      name: "17",
      pv: 4300,
      amt: 2100
    },
    {
      name: "18",
      pv: 4300,
      amt: 2100
    },
    {
      name: "19",
      pv: 4300,
      amt: 2100
    },
    {
      name: "20",
      pv: 4300,
      amt: 2100
    },
    {
      name: "21",
      pv: 4300,
      amt: 2100
    },
    {
      name: "22",
      pv: 4300,
      amt: 2100
    },
    {
      name: "23",
      pv: 4300,
      amt: 2100
    },
    {
      name: "24",
      pv: 4300,
      amt: 2100
    },
    {
      name: "25",
      pv: 4300,
      amt: 2100
    },
    {
      name: "26",
      pv: 4300,
      amt: 2100
    },
    {
      name: "27",
      pv: 4300,
      amt: 2100
    },
    {
      name: "28",
      pv: 4300,
      amt: 2100
    },
    {
      name: "29",
      pv: 4300,
      amt: 2100
    },
    {
      name: "30",
      pv: 4300,
      amt: 2100
    },
    {
      name: "31",
      pv: 4300,
      amt: 2100
    }
  ];
const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className="text-center">
                            <Card.Header>Sizning hozirgi darajangiz: <Button variant="primary" className="button-top-transform">Go somewhere</Button></Card.Header>
                            <Card.Body>
                                <Card.Title>Bu oy sotildi: 0</Card.Title>
                                <ProgressBar now={60} />
                                <Card.Text>
                                Darajangiz ko'tarilsa, sizga 10% ko'proq to'lanadi
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Header>Sizning hozirgi darajangiz: <Button variant="primary" className="button-top-transform">Go somewhere</Button></Card.Header>
                            <Card.Body>
                                <Card.Title>Bu oy sotildi: 0</Card.Title>
                                <ProgressBar now={60} />
                                <Card.Text>
                                Darajangiz ko'tarilsa, sizga 10% ko'proq to'lanadi
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                           <Row>
                               <Col>
                                    <Button variant='primary'>offer</Button>
                               </Col>
                               <Col>
                                    <Button variant='info'>traffic</Button>
                               </Col>
                               <Col>
                                    <Button variant='success'>Hold</Button>
                               </Col>
                           </Row>
                        </Card>
                    </Col>
                </Row>
				<Row className='my-4'>
					<Col>
                    <h2 className="text-center gray-text">daw</h2>
                    <ResponsiveContainer width="100%" height={400}>
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                    </ResponsiveContainer>
					</Col>
				</Row>
            </Container>
        </div>
    );
};

export default Dashboard;