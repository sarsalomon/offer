import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { LOGIN_ROUTE } from '../utils/consts';
import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button>
              <NavLink to={LOGIN_ROUTE}>Go</NavLink>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;