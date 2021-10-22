import React from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';

const Traffic = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card className="text-center p-1">
                            <Card.Body>
                                <div>

                                </div>
                                <div className="border-dashed-bottom my-3"></div>
                                <div style={{background: 'blue', borderRadius: '5px'}} className="p-2" >
                                    <div className="p-2 text-start">
                                    <Form.Control type="text" placeholder="name@example.com" />
                                    </div>
                                    <div className="p-2 text-start">
                                        <Button variant="primary">
                                            Nusha kochirish
                                        </Button>
                                        <Button variant="info" className="ms-3">
                                            1
                                        </Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        Traffic
                    </Col>
                    <Col md={4}>
                        Traffic
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Traffic;