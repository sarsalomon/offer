import React from 'react';
import { Col, Container, Row, Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div>
            <Container className="gray-text">
                <h2 className="text-center mb-3">FAQ — ko'p beriladigan savollar</h2>
                <Row className='mt-3 '>
                    <Col>
                        <Accordion >
                            <Accordion.Item eventKey="0" className="dark-accordion border-radius">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                               
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Faq;