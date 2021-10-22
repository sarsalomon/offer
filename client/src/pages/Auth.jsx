import {observer} from 'mobx-react-lite'
import React, { useState, useContext} from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import {Card, Container, Form, Button, Row, Modal, Col} from 'react-bootstrap'
import {ACTIVATION_ROUTE, DASHBOARD_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts'
import { signIn, registration } from "../http/userAPI";
import { Context } from '..';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history  = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const isActivation = location.pathname === ACTIVATION_ROUTE
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [activation, setActivation] = useState('')
    const [comfirm, setComfirm] = useState('')
    const [emailerror, setEmailError] = useState('')
    const [passworderror, setPasswordError] = useState('')
    const [confirmpassworderror, setConfirmPasswordError] = useState('')
    const [comfirmerror, setComfirmError] = useState('')

    let erroremailborder = emailerror ? '2px solid red' : ''
    let errorepasswordborder = passworderror ? '2px solid red' : ''
    let errorecomfirmpassworderrorborder = confirmpassworderror ? '2px solid red' : ''
    let errorecomfirmerrorborder = comfirmerror ? '2px solid red' : ''

    if(email.length>0){
        erroremailborder = ''
    }
    if(password.length>0){
        errorepasswordborder = ''
    }
    if(confirmpassword.length>0){
        errorecomfirmpassworderrorborder = ''
    }
    if(comfirm === true){
        errorecomfirmerrorborder = ''
    }
    let emailerrortext
    let normalemail
    var rx = /^([\w\.]+)@([\w\.]+)$/;
    var match = rx.exec(email)
    if(match !== null){
        if(match[2] === "gmail.com"){
            normalemail = true
        }else if(match[2] === "mail.ru"){
            normalemail = true
        }else if(match[2] === "yandex.ru"){
            normalemail = true
        }else{
            normalemail = false
            emailerrortext = 'Gmail.com yoki Mail.ru yoki Yandex.ru qullab quvatlidi'
        }
    }
 
    
    let reg = true
    let act = true
    let regcard
    let Uppermatches  = password.match(/[A-Z]/g);
    let Numbermatches = password.match(/[1-9]/g);
    let Specialmatches = password.match(/[^a-zA-Z0-9]/g);
    let error
    let pathname
    let passwordcurrent
    let passwordlengthbool
    let matchnbool
    let matchubool
    let matchsbool

    if(password !== confirmpassword && confirmpassword.length>0){
        errorecomfirmpassworderrorborder = '2px solid red'
        passwordcurrent = false
    }else{
        passwordcurrent = true
    }

    if (reg===true) {
        pathname = 'Login'
        if(isLogin){
            regcard = <div>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"                        
                            value={email}
                            onChange={e => setLogin(e.target.value)}
                        />
                </Form.Group>
                <Form.Group className="mb-3 gray-text">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password"   
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                </Form.Group>
            </div>
            reg = <div>
                Not Account? <NavLink to={REGISTRATION_ROUTE}>Reg</NavLink>
            </div>
        }else if(act===true && isActivation===true){
            pathname = 'isActivation'
            regcard = <div>
                <Form.Group className="mb-3">
                    <Form.Label>activation</Form.Label>
                        <Form.Control type="email"                        
                            value={activation}
                            onChange={e => setActivation(e.target.value)}
                        />
                </Form.Group>
                <span>d</span>
            </div>
        }else{
            pathname = 'Reg'
            if (password.length>0) {
                let passwordlength
                let matchn
                let matchu
                let matchs
                if(password.length>5){
                    passwordlengthbool = true
                    passwordlength = <Form.Text style={{color: 'green'}}>
                        Good
                    </Form.Text>
                }else{
                    passwordlengthbool = false
                    passwordlength = <Form.Text style={{color: 'red'}}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                }
                if(Numbermatches){
                    matchnbool = true
                    matchn = <Form.Text style={{color: 'green'}}>
                        Good
                    </Form.Text>
                }else{
                    matchnbool = false
                    matchn = <Form.Text style={{color: 'red'}}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                }
                if(Uppermatches){
                    matchubool = true
                    matchu = <Form.Text style={{color: 'green'}}>
                        Good
                    </Form.Text>
                }else{
                    matchubool = false
                    matchu = <Form.Text style={{color: 'red'}}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                }
                if(Specialmatches){
                    matchsbool = true
                    matchs = <Form.Text style={{color: 'green'}}>
                        Good
                    </Form.Text>
                }else{
                    matchsbool = false
                    matchs = <Form.Text style={{color: 'red'}}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                }
                    error = <div className="mt-3 gray-text">
                                {passwordlength}
                                <br/>
                                {matchn}
                                <br/>
                                {matchu}
                                <br/>
                                {matchs}
                            </div>
            }
            regcard = <div>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"                        
                            value={email}
                            onChange={e => setLogin(e.target.value)}
                            style={{border: erroremailborder}}
                        />
                            <Form.Text className="text-muted">
                              {emailerrortext}
                            </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 gray-text">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="text"   
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                style={{border: errorepasswordborder}}
                        /> 
                      {
                          error
                      }
                </Form.Group>
                <Form.Group className="mb-3 gray-text">
                    <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"   
                            value={confirmpassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            style={{border: errorecomfirmpassworderrorborder}}
                        />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row>
                        <Col>
                        <Form.Check type="checkbox" label="Qoidalar bilan tanishib chiqdim"        
                             defaultChecked={false}
                             onChange={() => setComfirm(!comfirm)}
                             style={{border: errorecomfirmerrorborder}}
                             />
                              
                        </Col>
                        <Col>
                        <span onClick={handleShow} style={{cursor: 'pointer', borderBottom: '2px solid blue'}}>
                            Qoidalar va Shartlar
                        </span>
                        </Col>
                    </Row>
                   
                </Form.Group>

            </div>
            reg = <div>
                Yes Account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
            </div>
        }
    }

    const click = async (e)=>{
        e.preventDefault();
        try{
            let data;
            if(isLogin){
                data = await signIn(email, password)
                user.setUser(user)
                user.setIsAuth(true)
                history.push(DASHBOARD_ROUTE)
            }else{
                if(passwordlengthbool === true && matchnbool === true && matchubool === true && matchsbool === true && passwordcurrent === true && comfirm === true && normalemail === true){
                    data = await registration(email, password)
                    user.setUser(user)
                    user.setIsAuth(true)
                    history.push(ACTIVATION_ROUTE)
                }
                if(passwordlengthbool === true && matchnbool === true && matchubool === true && matchsbool === true && passwordcurrent === true && comfirm === false){
                    toast.error('comfirm', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                if(email === ''){
                    errortoast('test error maiol')
                    setEmailError(true)
                }
                if(password === ''){
                    errortoast('test error password')
                    setPasswordError(true)
                }
                if(confirmpassword === ''){
                    errortoast('test error confirmpassword')
                    setConfirmPasswordError(true)
                }
                if(comfirm === ''){
                    errortoast('test error comfirm')
                    setComfirmError(true)
                }
            }
        }catch(e){
            errortoast(e.response.data.message)
        }
    }
    const errortoast = async (msg)=>{
        toast.error(msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div>
            <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight-54}}
        >
                <Card className="box-shadow login-card">
                    <h1 className="m-auto gray-text">{pathname}</h1>
                    <Form className="d-flex flex-column mt-4 gray-text">
                            {
                                regcard
                            }
                        <Row className="d-flex justify-content-between my-2 pl-3 pr-3">
                            {
                                reg
                            }
                        </Row>
                        <Button  onClick={click} variant="primary" type="submit" className="button-top-transform">
                        {pathname}
                        </Button>
                    </Form>
                </Card>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                        Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            <ToastContainer />
        </div>
    );
});

export default Auth;