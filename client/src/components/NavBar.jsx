import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import {Navbar, Container, Nav, NavDropdown, Dropdown, Form, Button } from 'react-bootstrap'
import {NavLink, useHistory} from 'react-router-dom'
import { CATEGORY_ROUTE, DASHBOARD_ROUTE, FAQ_ROUTE, HOME_ROUTE, OFFER_ROUTE, SHOP_ROUTE, TRAFFICS_ROUTE, TRAFFIC_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        localStorage.clear();
        user.setUser({})
        user.setIsAuth(false)
        history.push(HOME_ROUTE)
    }

    return (
        <div>
            <Container className='mb-4 mt-2'>
                <Navbar>
                    <Container>
                        <NavLink to={DASHBOARD_ROUTE} style={{ textDecoration: 'none' }}>  
                            <Navbar.Brand href="#home">
                                <img
                                alt="Logo"
                                src="https://sotuvchi.com/app/assets/img/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                />
                                <span className="ms-2 text-decoration-none">SOTAMAN</span>
                            </Navbar.Brand>
                        </NavLink>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Form>
                                <Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                    label="kun"
                                />
                            </Form>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" className="mx-4">
                                    D
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="success">
                                    Vaisov
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Mening profilim</Dropdown.Item>
                                    <Dropdown.Item onClick={() => logOut()}>Выйти</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Navbar collapseOnSelect expand="lg" className='mt-2 navbar-border'>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <NavLink to={DASHBOARD_ROUTE} className='navbar-link'>Assosiy</NavLink>
                            <NavLink to={OFFER_ROUTE} className='navbar-link'>Offer</NavLink>
                            <NavLink to={TRAFFIC_ROUTE} className='navbar-link'>oqim</NavLink>
                            <NavLink to={SHOP_ROUTE} className='navbar-link'>Ys Shop</NavLink>
                            <NavLink to={FAQ_ROUTE} style={{ textDecoration: 'none' }}><div class="navbar-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                            <span>Faq</span>
                            </div></NavLink>
                            <NavLink to={TRAFFICS_ROUTE} className='navbar-link'>traffics</NavLink>
                            <NavLink to={CATEGORY_ROUTE} className='navbar-link'>category</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
});

export default NavBar;