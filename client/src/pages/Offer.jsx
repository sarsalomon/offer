import React from 'react';
import { Col, Container, Row, Form, Dropdown, Button, Card, Image} from 'react-bootstrap';

const Offer = () => {
    return (
        <div>
            <Container>
                <Row className="p-3 bg-info rounded mb-3">
                    <Col md={6}>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Search" style={{borderRadius: '20px'}}/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <Dropdown width='100%'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={2}>
                        <Button variant={"outline-info"} className={'text-wrap button-top-transform'}>Kerakli offer yoqmi?</Button>
                    </Col>
                </Row>
                <Row className="p-3 bg-primary rounded mb-3">
                    <Col md={4} className="card-offer">
                        <Row>
                            <Col md={6}>
                                <Image src="https://sotuvchi.com/files/images/offers/0bb362552d68c8f9eb8a5fb175488138_thumb.jpg" alt="..." rounded />
                            </Col>                            
                            <Col md={6}>
                                <div className="card-offer-info">
                                    <h5 className="card-offer-title">
                                        <a href="https://sotuvchi.com/webmaster/offer/view/279">
                                                    Sovuq suvni istish imkoniyati Smistitel!
                                        </a>
                                    </h5>
                                    <p >357 000 / 70 000 so'm</p>
                                    <Row>
                                        <Col md={6}>
                                            <h5>EPC</h5>
                                            <h3>519.10 so'm</h3>
                                        </Col>
                                        <Col md={6}>
                                            <h5>CR</h5>
                                            <h3>0.67%</h3>
                                        </Col>
                                        
                                    </Row>
                                    <Button variant={'info'} className="button-top-transform">Batafsil</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>      
        </div>
    );
};

export default Offer;