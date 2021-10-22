import { observer } from 'mobx-react-lite';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const Footer = observer(() => {
    return (
        <div>
            <Container className='mt-4 gray-text'>
                <Row>
                    <Col>
                        2018 - 2021 © Sotuvchi CPA.
                    </Col>
                    <Col>
                        Sayt test rejimida ishlamoqda. Kamchiliklar kuzatilishi mumkin
                    </Col>
                </Row>
            </Container>
        </div>
    );
});

export default Footer;